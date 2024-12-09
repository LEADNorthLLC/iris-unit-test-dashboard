/// 
Class INTEROP.InteroperabilityProject.SGH.SGHAdtRoutingRule.SGHAdtRouter Extends Ens.Rule.Definition
{

Parameter RuleAssistClass = "EnsLib.HL7.MsgRouter.RuleAssist";

XData RuleDefinition [ XMLNamespace = "http://www.intersystems.com/rule" ]
{
<ruleDefinition alias="" context="EnsLib.HL7.MsgRouter.RoutingEngine" production="IRISAPPPKG.FoundationProduction">
<ruleSet name="" effectiveBegin="" effectiveEnd="">
<rule name="Route to Data Warehouse">
<constraint name="source" value="SGHAdtTcpInbound"></constraint>
<constraint name="docCategory" value="2.5.1"></constraint>
<constraint name="docName" value="ADT_A01"></constraint>
<when condition="true" comment="">
<send transform="" target="DataWarehouseHL7Outbound"></send>
</when>
</rule>
</ruleSet>
</ruleDefinition>
}

}
