Class UnitTest.Dashboard.REST.ProjectService Extends UnitTest.Dashboard.REST.Service.Base
{

/** Change Log
2024-12-10 - Chi Nguyen-Rettig : Created
2024-12-12 - Chi Nguyen-Rettig : Updated with Test Results 
2024-12-12 - Chi Nguyen-Rettig : Add RunUnitTest 
**/
ClassMethod RunUnitTest(projectName As %String = "", namespace As %String = "", packagePath As %String = "", className As %String = "*") As %Status
{
	Set tStatus = $$$OK
	#; Quit tSC
	Try {		
				//if empty parameters, set to default
		if projectName="" {
			set tProjectName = "InteroperabilityProject"
		}
		if namespace="" {
			set tNamespace = "IRISAPP"
		}
		if packagePath="" {
			set tPackagePath = "INTEROP"
		}
		if className="" {
			set tClassName = "*"
		}

		#;Dispatch request to production
		#Dim tResponse as %String

		//this method should return a response that is project Object	 	
    	$$$ThrowOnError(##class(LN.UnitTest.TestingUtil).RunUnitTest(tProjectName, tNamespace,tPackagePath, .tProjectObj,tClassName))

		//Once we have a Project Object, convert it to JSON

		set tStatus = tProjectObj.%JSONExportToStream(.tResponse)

		If $$$ISERR(tStatus) {
			Set %response.Status = 500
		}

		#;Write output 
		Set %response.ContentType="application/json"
	
		Set %response.Status = 200
		//Do tResponse.OutputToDevice()
		Do %response.SetHeader("Access-Control-Allow-Origin","*")


	} 
	Catch Ex {
		Set tStatus = Ex.AsStatus()
		Set %response = tStatus
		Set %response.Status = 500
		Set tStatus = $$$OK
	}
	Quit tStatus
}

ClassMethod GetProjectInfo(projectName As %String = "", namespace As %String = "", packagePath As %String = "") As %Status
{
	Set tSC = $$$OK
	#; Quit tSC
	Try {		
		#;Dispatch request to production
		#Dim tResponse as %String

		//if empty parameters, set to default
		if projectName="" {
			set tProjectName = "InteroperabilityProject"
		}
		if namespace="" {
			set tNamespace = "IRISAPP"
		}
		if packagePath="" {
			set tPackagePath = "INTEROP"
		}


		//this method should return a response that is project Object	 	
    	//$$$ThrowOnError(##class(LN.UnitTest.ProjectUtil).BuildProject("InteroperabilityProject", "IRISAPP","INTEROP", .tProjectObj))
		$$$ThrowOnError(##class(LN.UnitTest.ProjectUtil).BuildProject(tProjectName, tNamespace,tPackagePath, .tProjectObj))
		//Once we have a Project Object, convert it to JSON

		set tStatus = tProjectObj.%JSONExportToStream(.tResponse)

		If $$$ISERR(tStatus) {
			Set %response.Status = 500
		}

		#;Write output 
		Set %response.ContentType="application/json"
	
		Set %response.Status = 200
		Do tResponse.OutputToDevice()
		
		Do %response.SetHeader("Access-Control-Allow-Origin","*")


	} 
	Catch Ex {
		Set tStatus = Ex.AsStatus()
		Set %response = tStatus
		Set %response.Status = 500
		Set tStatus = $$$OK
	}
	Quit tStatus
}

ClassMethod GetTestResults(projectName As %String = "", namespace As %String = "", packagePath As %String = "") As %Status
{
	Set tStatus = $$$OK

	
	Try {
		//if empty parameters, set to default
		if projectName="" {
			set tProjectName = "InteroperabilityProject"
		}
		if namespace="" {
			set tNamespace = "IRISAPP"
		}
		if packagePath="" {
			set tPackagePath = "INTEROP"
		}		
		#;Dispatch request to production
		#Dim tResponse as %String

		//this method should return a response that is project Object	 	
    	$$$ThrowOnError(##class(LN.UnitTest.TestingUtil).BuildTestStatus("InteroperabilityProject", "IRISAPP","INTEROP", .tProjectObj))
		
		//Once we have a Project Object, convert it to JSON

		set tStatus = tProjectObj.%JSONExportToStream(.tResponse)

		If $$$ISERR(tStatus) {
			Set %response.Status = 500
		}

		#;Write output 
		Set %response.ContentType="application/json"
	
		Set %response.Status = 200
		Do tResponse.OutputToDevice()
		Do %response.SetHeader("Access-Control-Allow-Origin","*")
	} 
	Catch Ex {
		Set tStatus = Ex.AsStatus()
		Set %response = tStatus
		Set %response.Status = 500
		Set tStatus = $$$OK
	}
	Quit tStatus
}

}
