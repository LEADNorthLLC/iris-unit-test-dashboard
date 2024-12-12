export interface TestCase {
  name: string;
  status: 'pending' | 'Passed' | 'Failed';
  description?: string;
  datetime?: string;
}

export interface UnitTestClass {
  name: string;
  testCaseList?: TestCase[];
}

export interface Namespace {
  Name: string;
  UnitTestClasses: UnitTestClass[];
}

export interface TestProject {
  Name: string;
  Namespace: Namespace;
}