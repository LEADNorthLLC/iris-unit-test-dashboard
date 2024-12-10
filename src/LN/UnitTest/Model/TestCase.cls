/// Object that contains unit test class info
Class LN.UnitTest.Model.TestCase Extends (%SerialObject, %JSON.Adaptor, %XML.Adaptor)
{

Property name As %String;

Property label As %String;

Property status As %String [ InitialExpression = "pending" ];

Storage Default
{
<Data name="TestCaseState">
<Value name="1">
<Value>name</Value>
</Value>
<Value name="2">
<Value>label</Value>
</Value>
<Value name="3">
<Value>status</Value>
</Value>
</Data>
<State>TestCaseState</State>
<StreamLocation>^LN.UnitTest.Model.TestCaseS</StreamLocation>
<Type>%Storage.Serial</Type>
}

}
