/// Object that contains unit test class info
Class LN.UnitTest.Model.TestCase Extends (%Persistent, %XML.Adaptor)
{

Property name As %String;

Property label As %String;

Property status As %String [ InitialExpression = "pending" ];

Storage Default
{
<Data name="TestCaseDefaultData">
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
<Value>status</Value>
</Value>
</Data>
<DataLocation>^LN.UnitTest.Model.TestCaseD</DataLocation>
<DefaultData>TestCaseDefaultData</DefaultData>
<IdLocation>^LN.UnitTest.Model.TestCaseD</IdLocation>
<IndexLocation>^LN.UnitTest.Model.TestCaseI</IndexLocation>
<StreamLocation>^LN.UnitTest.Model.TestCaseS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}