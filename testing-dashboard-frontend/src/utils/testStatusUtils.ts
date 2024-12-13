import type { TestCase } from '../types/testing';

export interface MostRecentFailure {
  testName: string;
  description: string;
  datetime: string;
}

export interface StatusCount {
  passed: number;
  failed: number;
  pending: number;
}

export function findMostRecentFailure(testCases: TestCase[]): MostRecentFailure | null {
  const failures = testCases
    .filter(test => test.status === 'Failed' && test.datetime)
    .sort((a, b) => {
      const dateA = a.datetime ? new Date(a.datetime).getTime() : 0;
      const dateB = b.datetime ? new Date(b.datetime).getTime() : 0;
      return dateB - dateA;
    });

  if (failures.length === 0) return null;

  const mostRecent = failures[0];
  return {
    testName: mostRecent.name,
    description: mostRecent.description || 'No description available',
    datetime: mostRecent.datetime || '',
  };
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