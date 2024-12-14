import React from 'react';
import { Filter } from 'lucide-react';

export type TestFilter = 'all' | 'passed' | 'failed' | 'withDescription';

interface TestFiltersProps {
  selectedFilter: TestFilter;
  onFilterChange: (filter: TestFilter) => void;
}

export const TestFilters: React.FC<TestFiltersProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Filter className="w-4 h-4 text-gray-500" />
      <div className="flex space-x-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            selectedFilter === 'all'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('passed')}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            selectedFilter === 'passed'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Passed
        </button>
        <button
          onClick={() => onFilterChange('failed')}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            selectedFilter === 'failed'
              ? 'bg-red-100 text-red-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Failed
        </button>
        <button
          onClick={() => onFilterChange('withDescription')}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            selectedFilter === 'withDescription'
              ? 'bg-purple-100 text-purple-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          With Description
        </button>
      </div>
    </div>
  );
};