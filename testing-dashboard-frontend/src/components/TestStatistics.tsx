import React from 'react';
import { CheckCircle2, XCircle, Clock, AlertTriangle } from 'lucide-react';
import type { TestCase } from '../types/testing';
import { getStatusCounts, findMostRecentFailure } from '../utils/testStatusUtils';

interface TestStatisticsProps {
  testCases: TestCase[];
}

export const TestStatistics: React.FC<TestStatisticsProps> = ({ testCases }) => {
  const stats = getStatusCounts(testCases);
  const mostRecentFailure = findMostRecentFailure(testCases);

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
        {mostRecentFailure ? (
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">
                  {mostRecentFailure.testName}
                </h3>
                <p className="text-sm text-gray-500">
                  Failed on: {new Date(mostRecentFailure.datetime).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-2 bg-red-50 rounded-md p-3">
              <p className="text-sm text-red-700 whitespace-pre-wrap">
                {mostRecentFailure.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-gray-600">
              No test failures found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};