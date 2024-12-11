Class INTEROP.InteroperabilityProject.UnitTest.GHADTUnitTest Extends LN.UnitTest.RuleSet.HL7
{

/// <pre>
/// Copyright (c) Alex Woodhead 2022
/// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
/// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/// License MIT
/// Source: https://github.com/alexatwoodhead/UnitTest_RuleSet
/// Version: 1.0
/// </pre>]]>
/// To run a Unit Test from console.
/// <example>
/// d ##class(INTEROP.InteroperabilityProject.UnitTest.GHADTUnitTest).Debug()
/// </example>
Parameter TestSuite = "GH-HL7ADT";

/// Override for different schema
Parameter HL7Schema = "2.5.1:ADT_A01";

/// Override with name of existing service on production
Parameter SourceBusinessServiceName = "GHAdtTcpInbound";

/// Override with name of existing business process routing engine on production
Parameter TargetConfigName = "GHAdtRouter";

/// Primary routing process name on production
Parameter PrimaryRoutingProcessName = "GHAdtRouter";

/// Secondary routing process name on production
Parameter SecondaryRoutingProcessName = "DataWarehouseHL7Outbound-GH";

Parameter AssigningAuthority = "GH";

Parameter NewLine = 10;

Method TestMessageA01()
{
        Set ReturnA01 = ..#PrimaryRoutingProcessName_":TransformA01"
        #dim message as EnsLib.HL7.Message

        // Load new HL7Message per UnitTest
        set ..HL7Message=..GetMessage("SourceMessageA01")
        quit:'$IsObject(..HL7Message) $$$ERROR(5001,"Failed to correlate Xdata for Source Message")
        
        set routingProcess = ..#PrimaryRoutingProcessName

        set message=..HL7Message.%ConstructClone(1)
        do message.PokeDocType(message.DocType)
        do message.SetValueAt("SYSA","MSH:3.1")
        set expectSuccess=1
        set expectReturn="send:"_ReturnA01
        set expectReason="rule#8"
        do ..SendMessageToRouter(message,"TestMessageA01",routingProcess, expectSuccess, expectReturn, expectReason)
}

XData SourceMessageA01
{
<test><![CDATA[
        MSH|^~\&|REGADT|COUNTYGEN|IFENG||199601061253||ADT^A01|000001|P|2.3.1|1||
        EVN|A01|199601061000|199601101400|1
        PID|||999473857^^^GENHOSP|253763|MASSIE^JAMES^A||19560129|M|||87 MAIN ST^^CAMBRIDGE^MA^02142^||(900)485-5344|(900)485-5344|ENGLISH|S|C|10199925|371-66-9256
        PD1|||||||||
        NK1||||||
        PV1||O|||||0148^ADDISON^JAMES|0148^ADDISON^JAMES|0148^ADDISON^JAMES|AMB|||||||0148^ADDISON^JAMES|S|1400|A|||||||||||||||||GENHOSP
        PV2||||||||199601101400|199601101400
        DB1|||||||||||
        OBX||ST|1010.1^BODY WEIGHT||100|kg
        OBX||ST|1010.1^HEIGHT||190|cm
        AL1|||||||||||
        DG1|||||||||||
        DRG|||||||||||
        PR1|||||||||||
        ROL|||||||||||
        GT1|||||||||||
        IN1|||||||||||
        IN2|||||||||||
        IN3|||||||||||
        ACC|||||||||||
        UB1|||||||||||
        UB2|||||||||||
        ]]></test>
}

}
