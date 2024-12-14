import { TestProject } from '../types/testing';

export const defaultSampleData: TestProject = {
    "Name": "EG",
    "Namespace": {
        "Name": "EGMUSC",
        "UnitTestClasses": [
            {
                "name": "BCBSSC.EG.UnitTest.AVALONLABCORPOruUnitTest",
                "testCaseList": [
                   {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+35^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "4"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+56^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "6"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "SessionId was 2",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+12^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "1"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "Source Config Name name is :DataWarehouseHL7Outbound-SGH",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+15^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "2"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "No message body id found for Session Id",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+33^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "3"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "Expect Success is 1",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+41^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "5"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+35^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "4"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+56^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "6"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "SessionId was 5",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+12^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "1"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "Source Config Name name is :DataWarehouseHL7Outbound-SGH",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+15^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "2"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "No message body id found for Session Id",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+33^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "3"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "Expect Success is 1",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+41^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "5"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=send:SGHAdtRouter:TransformA01;Actual Return=send:DataWarehouseHL7Outbound-SGH:",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+61^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "6"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Reason:TestMessageA01:Expected Reason=rule#8;Actual Reason=rule#1(Route to SGH Data Warehouse):when#1",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+66^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "7"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "SessionId was 8",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+12^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "1"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Router name is :SGHAdtRouter",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+15^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "2"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Return Value was send:DataWarehouseHL7Outbound-SGH:",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+38^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "3"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect Return Value was send:SGHAdtRouter:TransformA01",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+39^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "4"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect Success is 1",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+41^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "5"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Duration of execution: .057568 sec.",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "action": "LogMessage",
                        "counter": "8"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+36^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "4"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "Expect contains Return:TestMessageA04:Expected Return=send:DataWarehouseHL7Outbound-SGH:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+61^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "6"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "Expect contains Reason:TestMessageA04:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+66^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "7"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "SessionId was 11",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+12^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "1"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "Router name is :SGHAdtRouter",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+15^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "2"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "Reason was empty",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+33^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "3"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "Expect Success is 1",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+41^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "5"
                    },
                    {
                        "name": "TestMessageA04Routing",
                        "description": "Duration of execution: 42.023518 sec.",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "action": "LogMessage",
                        "counter": "8"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Return:TestMessageA05:Expected Return=send:DataWarehouseHL7Outbound-SGH:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+61^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "6"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Reason:TestMessageA05:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+66^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "7"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "SessionId was 13",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+12^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "1"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Router name is :SGHAdtRouter",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+15^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "2"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Return Value was ",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+38^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "3"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect Return Value was send:DataWarehouseHL7Outbound-SGH:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+39^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "4"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect Success is 1",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+41^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "5"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Duration of execution: .014771 sec.",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "action": "LogMessage",
                        "counter": "8"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+36^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "4"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Return:TestMessageA08:Expected Return=send:DataWarehouseHL7Outbound-SGH:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+61^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "6"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Reason:TestMessageA08:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+66^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertTrue",
                        "counter": "7"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "SessionId was 15",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+12^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "1"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Router name is :SGHAdtRouter",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+15^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "2"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Reason was empty",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+33^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "3"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect Success is 1",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageToRouter+41^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "5"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Duration of execution: 42.031 sec.",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "action": "LogMessage",
                        "counter": "8"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+35^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "4"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+56^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "AssertEquals",
                        "counter": "6"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "SessionId was 17",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+12^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "1"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "Source Config Name name is :DataWarehouseHL7Outbound-SGH",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+15^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "2"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "No message body id found for Session Id",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+33^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "3"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "Expect Success is 0",
                        "status": "Passed",
                        "datetime": "2024-12-14 04:04:39",
                        "duration": "210.333257",
                        "location": "SendMessageReturnOutput+41^INTEROP.InteroperabilityProject.UnitTest.SGHADTUnitTest.cls",
                        "action": "LogMessage",
                        "counter": "5"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.BEAUFORTAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA04"
                    },
                    {
                        "name": "TestMessageA05"
                    },
                    {
                        "name": "TestMessageA06"
                    },
                    {
                        "name": "TestMessageA08"
                    },
                    {
                        "name": "TestMessageA13"
                    },
                    {
                        "name": "TestPD1LocationMapped"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.MUSCAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA02"
                    },
                    {
                        "name": "TestMessageA03"
                    },
                    {
                        "name": "TestMessageA04"
                    },
                    {
                        "name": "TestMessageA05"
                    },
                    {
                        "name": "TestMessageA06"
                    },
                    {
                        "name": "TestMessageA08"
                    },
                    {
                        "name": "TestMessageA28"
                    },
                    {
                        "name": "TestMessageA31"
                    },
                    {
                        "name": "TestPD1LocationMapped"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=MUSC;Actual Return=MUSC",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=1197112023;Actual Return=1197112023",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Reason:TestMessageA01:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Reason:TestMessageA01:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Return:TestMessageA02:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Reason:TestMessageA02:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Return:TestMessageA02:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Reason:TestMessageA02:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Return:TestMessageA03:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA03;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA03",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Reason:TestMessageA03:Expected Reason=rule#7;Actual Reason=rule#7(A03 Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Return:TestMessageA03:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA03;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Reason:TestMessageA03:Expected Reason=rule#7;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Return:TestMessageA04:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Reason:TestMessageA04:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Return:TestMessageA04:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Reason:TestMessageA04:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Return:TestMessageA05:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Reason:TestMessageA05:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Return:TestMessageA05:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Reason:TestMessageA05:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Return:TestMessageA06:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Reason:TestMessageA06:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Return:TestMessageA06:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Reason:TestMessageA06:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Return:TestMessageA08:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Reason:TestMessageA08:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Return:TestMessageA08:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Reason:TestMessageA08:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Return:TestMessageA28:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Reason:TestMessageA28:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Return:TestMessageA28:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Reason:TestMessageA28:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Return:TestMessageA31:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Reason:TestMessageA31:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Return:TestMessageA31:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Reason:TestMessageA31:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "Expect No Match:TestPD1Location:ReturnValue=",
                        "status": "Failed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.TestAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA02"
                    },
                    {
                        "name": "TestMessageA03"
                    },
                    {
                        "name": "TestMessageA04"
                    },
                    {
                        "name": "TestMessageA05"
                    },
                    {
                        "name": "TestMessageA06"
                    },
                    {
                        "name": "TestMessageA08"
                    },
                    {
                        "name": "TestMessageA28"
                    },
                    {
                        "name": "TestMessageA31"
                    },
                    {
                        "name": "TestPD1LocationMapped"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.TidelandsAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA03"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.AVALONLABCORPOruUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA02"
                    },
                    {
                        "name": "TestMessageA03"
                    },
                    {
                        "name": "TestMessageA04"
                    },
                    {
                        "name": "TestMessageA05"
                    },
                    {
                        "name": "TestMessageA06"
                    },
                    {
                        "name": "TestMessageA08"
                    },
                    {
                        "name": "TestMessageA28"
                    },
                    {
                        "name": "TestMessageA31"
                    },
                    {
                        "name": "TestPD1LocationMapped"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.BEAUFORTAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA04"
                    },
                    {
                        "name": "TestMessageA05"
                    },
                    {
                        "name": "TestMessageA06"
                    },
                    {
                        "name": "TestMessageA08"
                    },
                    {
                        "name": "TestMessageA13"
                    },
                    {
                        "name": "TestPD1LocationMapped"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.MUSCAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA02"
                    },
                    {
                        "name": "TestMessageA03"
                    },
                    {
                        "name": "TestMessageA04"
                    },
                    {
                        "name": "TestMessageA05"
                    },
                    {
                        "name": "TestMessageA06"
                    },
                    {
                        "name": "TestMessageA08"
                    },
                    {
                        "name": "TestMessageA28"
                    },
                    {
                        "name": "TestMessageA31"
                    },
                    {
                        "name": "TestPD1LocationMapped"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=MUSC;Actual Return=MUSC",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestCorrectAssigningAuthorityForA01",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=1197112023;Actual Return=1197112023",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestEncounterNumberPresent",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Reason:TestMessageA01:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Return:TestMessageA01:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA01",
                        "description": "Expect contains Reason:TestMessageA01:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Return:TestMessageA02:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Reason:TestMessageA02:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Return:TestMessageA02:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA02",
                        "description": "Expect contains Reason:TestMessageA02:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Return:TestMessageA03:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA03;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA03",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Reason:TestMessageA03:Expected Reason=rule#7;Actual Reason=rule#7(A03 Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Return:TestMessageA03:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA03;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA03",
                        "description": "Expect contains Reason:TestMessageA03:Expected Reason=rule#7;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Return:TestMessageA04:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Reason:TestMessageA04:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Return:TestMessageA04:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA04",
                        "description": "Expect contains Reason:TestMessageA04:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Return:TestMessageA05:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Reason:TestMessageA05:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Return:TestMessageA05:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA05",
                        "description": "Expect contains Reason:TestMessageA05:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Return:TestMessageA06:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Reason:TestMessageA06:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Return:TestMessageA06:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA06",
                        "description": "Expect contains Reason:TestMessageA06:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Return:TestMessageA08:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Reason:TestMessageA08:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Return:TestMessageA08:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA08",
                        "description": "Expect contains Reason:TestMessageA08:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Return:TestMessageA28:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Reason:TestMessageA28:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Return:TestMessageA28:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA28",
                        "description": "Expect contains Reason:TestMessageA28:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Return:TestMessageA31:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Reason:TestMessageA31:Expected Reason=rule#8;Actual Reason=rule#8(ADT Types Msg):when#1",
                        "status": "Passed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "\"\"==\"No record found in Rule Log\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Return:TestMessageA31:Expected Return=send:MUSC.ADTTransform:BCBSSC.EG.ProfSvcs.Router.Base.ADT.TransformA01;Actual Return=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestMessageA31",
                        "description": "Expect contains Reason:TestMessageA31:Expected Reason=rule#8;Actual Reason=",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "Expect No Match:TestPD1Location:ReturnValue=",
                        "status": "Failed",
                        "datetime": "2024-03-15 10:05:20"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "\"\"==\"No message body id found for Session Id\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    },
                    {
                        "name": "TestPD1LocationMapped",
                        "description": "\"\"==\"Unable to test output message\" was ''",
                        "status": "Failed",
                        "datetime": "2024-12-07 15:17:29"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.TestAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA02"
                    },
                    {
                        "name": "TestMessageA03"
                    },
                    {
                        "name": "TestMessageA04"
                    },
                    {
                        "name": "TestMessageA05"
                    },
                    {
                        "name": "TestMessageA06"
                    },
                    {
                        "name": "TestMessageA08"
                    },
                    {
                        "name": "TestMessageA28"
                    },
                    {
                        "name": "TestMessageA31"
                    },
                    {
                        "name": "TestPD1LocationMapped"
                    }
                ]
            },
            {
                "name": "BCBSSC.EG.UnitTest.TidelandsAdtUnitTest",
                "testCaseList": [
                    {
                        "name": "TestCorrectAssigningAuthorityForA01"
                    },
                    {
                        "name": "TestEncounterNumberPresent"
                    },
                    {
                        "name": "TestMessageA01"
                    },
                    {
                        "name": "TestMessageA03"
                    }
                ]
            }
        ]
    }
};

export let sampleData = { ...defaultSampleData };