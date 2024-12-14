import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import axios from 'axios';
import type { UnitTestClass } from '../types/testing';
import { TestDetailsPanel } from './TestDetailsPanel';
import { TestStatusIndicators } from './TestStatusIndicators';
import { CopyableText } from './CopyableText';
import { getShortClassName } from '../utils/getShortClassName';

interface TestListItemProps {
  unitTestClass: UnitTestClass;
}

export const TestListItem: React.FC<TestListItemProps> = ({ unitTestClass }) => {
  const [showDetails, setShowDetails] = useState(false);
  const shortName = getShortClassName(unitTestClass.name);
  const testCount = unitTestClass.testCaseList?.length || 0;
  const hasTests = testCount > 0;

  const handleRunTests = async () => {
    try {
      // Placeholder for future implementation

      console.log('Running tests for:', unitTestClass.name);
    } catch (error) {
      console.error('Failed to run tests:', error);
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap">
          <CopyableText text={unitTestClass.name} displayText={shortName} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            {testCount} {testCount === 1 ? 'Test' : 'Tests'}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <TestStatusIndicators testCases={unitTestClass.testCaseList || []} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          {/* <button
            onClick={handleRunTests}
            disabled={!hasTests}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
            title={hasTests ? 'Run all tests' : 'No tests available to run'}
          >
            Run All Tests
            <Play className="ml-2 -mr-1 h-4 w-4" />
          </button> */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {showDetails ? (
              <>
                Hide Details
                <ChevronUp className="ml-2 -mr-1 h-4 w-4" />
              </>
            ) : (
              <>
                View Details
                <ChevronDown className="ml-2 -mr-1 h-4 w-4" />
              </>
            )}
          </button>
        </td>
      </tr>
      {showDetails && (
        <tr>
          <td colSpan={4} className="px-6 py-4 bg-gray-50">
           
            <TestDetailsPanel 
              testCases={unitTestClass.testCaseList || []}
              className={unitTestClass.name}
            />
          </td>
        </tr>
      )}
    </>
  );
};