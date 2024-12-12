import React from 'react';
import { Circle } from 'lucide-react';
import type { TestCase } from '../types/testing';
import { getStatusCounts } from '../utils/testStatusUtils';

interface TestStatusIndicatorsProps {
  testCases: TestCase[];
}

export const TestStatusIndicators: React.FC<TestStatusIndicatorsProps> = ({ testCases }) => {
  if (!testCases || testCases.length === 0) {
    return (
      <div className="flex items-center">
        <Circle className="w-3 h-3 text-gray-300" fill="currentColor" />
      </div>
    );
  }

  if (testCases.length <= 10) {
    return (
      <div className="flex items-center space-x-1">
        {testCases.map((testCase, index) => {
          let color = 'text-yellow-400'; // pending
          if (testCase.status === 'Passed') {
            color = 'text-green-500';
          } else if (testCase.status === 'Failed') {
            color = 'text-red-500';
          }

          return (
            <Circle
              key={`${testCase.name}-${index}`}
              className={`w-3 h-3 ${color}`}
              fill="currentColor"
              title={`${testCase.name}: ${testCase.status}`}
            />
          );
        })}
      </div>
    );
  }

  const counts = getStatusCounts(testCases);

  return (
    <div className="flex items-center space-x-3 text-sm">
      <span className="flex items-center">
        <Circle className="w-3 h-3 text-green-500 mr-1" fill="currentColor" />
        <span className="text-gray-600">Passed - {counts.passed}</span>
      </span>
      <span className="flex items-center">
        <Circle className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" />
        <span className="text-gray-600">Pending - {counts.pending}</span>
      </span>
      <span className="flex items-center">
        <Circle className="w-3 h-3 text-red-500 mr-1" fill="currentColor" />
        <span className="text-gray-600">Failed - {counts.failed}</span>
      </span>
    </div>
  );
};