import React from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import type { TestCase } from '../types/testing';
import { generateKey } from '../utils/generateKey';

interface TestCaseListProps {
  testCases: TestCase[];
}

export const TestCaseList: React.FC<TestCaseListProps> = ({ testCases }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Passed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'Failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <ul className="space-y-2">
      {testCases.map((testCase, index) => (
        <li
          key={generateKey(`${testCase.name}-${index}`)}
          className="flex items-center space-x-3 p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
        >
          {getStatusIcon(testCase.status)}
          <span className="text-gray-700">{testCase.name}</span>
        </li>
      ))}
    </ul>
  );
};