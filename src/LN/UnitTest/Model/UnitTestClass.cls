/// Object that contains unit test class info
Class LN.UnitTest.Model.UnitTestClass Extends (%Persistent, %XML.Adaptor)
{

Property name As %String;

Property label As %String;

Property testCaseList As %ListOfDataTypes;

// Unit Test Cases are the Methods in this class that start with the name "Test"

// Helper method to identiy the Test Methods

Storage Default
{
<Data name="UnitTestClassDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>name</Value>
</Value>
<Value name="3">
<Value>label</Value>
</Value>
<Value name="4">
<Value>testCaseList</Value>
</Value>
</Data>
<DataLocation>^LN.UnitTest4FF5.UnitTestClassD</DataLocation>
<DefaultData>UnitTestClassDefaultData</DefaultData>
<IdLocation>^LN.UnitTest4FF5.UnitTestClassD</IdLocation>
<IndexLocation>^LN.UnitTest4FF5.UnitTestClassI</IndexLocation>
<StreamLocation>^LN.UnitTest4FF5.UnitTestClassS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}