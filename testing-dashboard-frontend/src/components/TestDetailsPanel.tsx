import React from 'react';
import { useState } from 'react';
import { CheckCircle2, XCircle, Clock, Play } from 'lucide-react';
import axios from 'axios';
import type { TestCase } from '../types/testing';

interface TestDetailsPanelProps {
  testCases: TestCase[];
  className?: string;
}

export const TestDetailsPanel: React.FC<TestDetailsPanelProps> = ({ testCases, className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(testCases.length / itemsPerPage);
  
  const handleRunTest = async (testName: string) => {
    try {
      // Placeholder for future implementation

    } catch (error) {
      console.error('Failed to run test:', error);
    }
  };

  // Get current page's test cases
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testCases.slice(indexOfFirstItem, indexOfLastItem);

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

  if (testCases.length === 0) {
    return (
      <div className="text-sm text-gray-500 italic">
        No test cases available
      </div>
    );
  }

  const renderPaginationControls = () => (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-50">
      <div className="flex items-center text-sm text-gray-700">
        <span>
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, testCases.length)} of {testCases.length} results
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );

  return testCases.length === 0 ? (
    <div className="text-sm text-gray-500 italic">
      No test cases available
    </div>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Test Case Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-96">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date/Time
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((testCase, index) => (
            <tr key={`${testCase.name}-${index}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getStatusIcon(testCase.status)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {testCase.name}
              </td>
              <td className="px-6 py-4 whitespace-pre-line text-sm text-gray-900 max-w-md truncate">
                {testCase.description || '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {testCase.datetime || '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <button
                  onClick={() => handleRunTest(testCase.name)}
                  className="inline-flex items-center p-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  title="Run Test"
                >
                  <Play className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderPaginationControls()}
    </div>
  );
};