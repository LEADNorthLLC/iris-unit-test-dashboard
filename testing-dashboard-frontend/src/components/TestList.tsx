import React from 'react';
import type { UnitTestClass } from '../types/testing';
import { TestListItem } from './TestListItem';

interface TestListProps {
  unitTestClasses: UnitTestClass[];
}

export const TestList: React.FC<TestListProps> = ({ unitTestClasses }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Unit Test Class
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Num. Unit Tests
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Test Case Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {unitTestClasses.map((unitTestClass, index) => (
            <TestListItem 
              key={`${unitTestClass.name}-${index}`}
              unitTestClass={unitTestClass}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};