Include HS.HC.Util

/// Author: Chi Nguyen-Rettig (LEADNorth) 12/11/2024
/// This utility class inspects the TestSuites run for the project UnitTest folders
/// Depedencies:
/// Globals: ^UnitTestRoot - location of the base unit test folder
/// 		 ^UnitTest("PackagePath") - default path to project if none passed in
/// 			 ^UnitTest("Namespace") - default unit test namespace if none passed in
/// Method: BuildTestStatus 
/// Calls BuildProject from LN.UnitTest.ProjectUtil to build a project object
/// Based on the project object, queries the test status table located at: select * from %UnitTest_Result.TestAssert
/// Returns the project object with test statuses updated 
/// Run: do ##class(LN.UnitTest.TestingUtil).BuildTestStatus("EG","EGMUSC","BCBSSC", .projectObj)
Class LN.UnitTest.TestingUtil Extends %RegisteredObject
{

ClassMethod BuildTestStatus(projectName As %String, namespace As %String = "", packagePath As %String = "", ByRef projectObj As LN.UnitTest.Model.Project) As %Status
{
	
	#dim namespaceObj As LN.UnitTest.Model.Namespace
	
	Set tStatus = $$$OK
	try {

	if projectName = "" {
			$$$ThrowError($$$GeneralError,"Project Name required")
	}

	//if namespace is empty
	if namespace ="" {
		set tNamespace = $GET(^UnitTest("Namespace"))
		if tNamespace = "" {
			
			$$$ThrowError($$$GeneralError,"Namespace parameter required or set ^UnitTest(""Namespace"")")
		}	
	}	
	else {
		set tNamespace = namespace	
	}

	//if package path is empty
	if packagePath ="" {
		set tPackagePath = $GET(^UnitTest("PackagePath"))
		if tPackagePath = "" {
			
			$$$ThrowError($$$GeneralError,"PackagePath parameter required or set ^UnitTest(""PackagePath"")")
		}	
	}	
	else {
		set tPackagePath = packagePath	
	}
	#dim classList As List of UnitTestClass
	
	//Call BuildProject
	$$$ThrowOnError(##class(LN.UnitTest.ProjectUtil).BuildProject(projectName,namespace,packagePath,.projectObj))
	set classList = projectObj.Namespace.UnitTestClasses
	
	
	//Loop through the Unit Test cases
	#dim unitTestObj As LN.UnitTest.Model.UnitTestClass
	#dim testCaseObj As LN.UnitTest.Model.TestCase
	#dim testCaseResultObj As LN.UnitTest.Model.TestCaseResult
	For index=1:1:classList.Count() {
		
		Set unitTestObj = classList.GetAt(index)
		//loop through test cases. For each test case, create and add results
		For testIndex=1:1:unitTestObj.testCaseList.Count(){
			Set testCaseObj = unitTestObj.testCaseList.GetAt(testIndex)
			Set classname = unitTestObj.name
			Set testcasename = testCaseObj.name
			&sql(DECLARE C1 CURSOR FOR
 			SELECT t.Description, t.Status, i.DateTime
 			INTO :description, :status, :datetime
			FROM %UnitTest_Result.TestAssert t, %UnitTest_Result.TestInstance i  
			WHERE t.TestMethod [  :classname AND t.TestMethod [ :testcasename AND
			i.ID = $EXTRACT(t.TestMethod, 0, 1) and  
	    		t.Action [ 'Assert' 
			ORDER BY i.datetime

    		)
			
			&sql(OPEN C1)
      			QUIT:(SQLCODE'=0)	
			
			//process cursor
 			&sql(FETCH C1)
	 		While (SQLCODE = 0) {
		 		Set testCaseResultObj = ##class(LN.UnitTest.Model.TestCaseResult).%New()
			 	set testCaseResultObj.name = testcasename
			 	set testCaseResultObj.description = description
			 	set testCaseResultObj.datetime = datetime
			 	Set testCaseResultObj.status = $SELECT(status=1:"Passed", status=0:"Failed", 1:"Unknown")
			 	//set testCaseResultObj.status = status
			 	do unitTestObj.testCaseList.Insert(testCaseResultObj)
		 		
    			&sql(FETCH C1)
	 		}    
	 	
 			&sql(CLOSE C1)
		}
		
        do projectObj.Namespace.UnitTestClasses.Insert(unitTestObj)   
	  }
	}
	catch(ex) {
		w ex.Status	
	}
	Quit tStatus
}

}
