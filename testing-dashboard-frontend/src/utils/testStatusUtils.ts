import type { TestCase } from '../types/testing';

export interface StatusCount {
  passed: number;
  failed: number;
  pending: number;
}

export function getStatusCounts(testCases: TestCase[]): StatusCount {
  return testCases.reduce(
    (acc, testCase) => {
      if (testCase.status === 'Passed') acc.passed++;
      else if (testCase.status === 'Failed') acc.failed++;
      else acc.pending++;
      return acc;
    },
    { passed: 0, failed: 0, pending: 0 }
  );
}