import React from 'react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import type { TestCase } from '../types/testing';

interface TestStatisticsProps {
  testCases: TestCase[];
}

export const TestStatistics: React.FC<TestStatisticsProps> = ({ testCases }) => {
  const stats = {
    passed: 0,
    failed: 0,
    pending: 0
  };

  testCases.forEach(testCase => {
    if (testCase.status === 'Passed') {
      stats.passed++;
    } else if (testCase.status === 'Failed') {
      stats.failed++;
    } else {
      stats.pending++;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Results</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
           
            <span className="text-2xl font-bold text-green-600">{stats.passed}</span>
            <span className="text-sm text-green-600">Passed</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
        
            <span className="text-2xl font-bold text-red-600">{stats.failed}</span>
            <span className="text-sm text-red-600">Failed</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
            
            <span className="text-2xl font-bold text-yellow-600">{stats.pending}</span>
            <span className="text-sm text-yellow-600">Pending</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Most Recent Failure</h2>
        <p className="text-gray-600">
          Or another metric coming soon.
        </p>
      </div>
    </div>
  );
};