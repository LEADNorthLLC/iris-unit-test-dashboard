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