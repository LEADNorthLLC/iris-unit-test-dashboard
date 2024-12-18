import React from 'react';
import { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, Clock, Play, ArrowUpDown, ArrowUp, ArrowDown, Timer, Hash, Copy, CheckCircle2 as Check, Eye } from 'lucide-react';
import axios from 'axios';
import type { TestCase } from '../types/testing';
import { TestFilters, TestFilter } from './TestFilters';
import { getShortLocation } from '../utils/getShortLocation';
import { TestDetailsPopup } from './TestDetailsPopup';

type SortField = 'name' | 'datetime';
type SortDirection = 'asc' | 'desc';

interface TestDetailsPanelProps {
  testCases: TestCase[];
  className?: string;
}

export const TestDetailsPanel: React.FC<TestDetailsPanelProps> = ({ testCases, className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedFilter, setSelectedFilter] = useState<TestFilter>('all');
  const itemsPerPage = 10;
  const [copiedLocation, setCopiedLocation] = useState<string | null>(null);
  const [selectedTestCase, setSelectedTestCase] = useState<TestCase | null>(null);

  const handleFilterChange = (filter: TestFilter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleCopyLocation = async (location: string) => {
    try {
      await navigator.clipboard.writeText(location);
      setCopiedLocation(location);
      setTimeout(() => setCopiedLocation(null), 2000);
    } catch (err) {
      console.error('Failed to copy location:', err);
    }
  };
  
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4" />;
    return sortDirection === 'asc' ? 
      <ArrowUp className="w-4 h-4" /> : 
      <ArrowDown className="w-4 h-4" />;
  };

  const handleRunTest = async (testName: string) => {
    try {
      // Placeholder for future implementation
      // await axios.post('/api/test/run', {
      //   className,
      //   testName
      // });
      console.log('Running test:', { className, testName });
    } catch (error) {
      console.error('Failed to run test:', error);
    }
  };

  const filteredAndSortedTestCases = useMemo(() => {
    // First apply filters
    let filtered = [...testCases];
    
    switch (selectedFilter) {
      case 'passed':
        filtered = filtered.filter(test => test.status === 'Passed');
        break;
      case 'failed':
        filtered = filtered.filter(test => test.status === 'Failed');
        break;
      case 'pending':
        filtered = filtered.filter(test => !test.status || test.status === 'pending');
        break;
      case 'withDescription':
        filtered = filtered.filter(test => test.description && test.description.trim() !== '');
        break;
      default:
        break;
    }

    // Then sort
    return filtered.sort((a, b) => {
    if (sortField === 'name') {
      return sortDirection === 'asc' 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      const dateA = a.datetime ? new Date(a.datetime).getTime() : 0;
      const dateB = b.datetime ? new Date(b.datetime).getTime() : 0;
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    }
    });
  }, [testCases, selectedFilter, sortField, sortDirection]);

  // Get current page's test cases
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedTestCases.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAndSortedTestCases.length / itemsPerPage);

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
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredAndSortedTestCases.length)} of {filteredAndSortedTestCases.length} results
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
      <TestFilters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <button
                onClick={() => handleSort('name')}
                className="inline-flex items-center space-x-1 hover:text-gray-700"
              >
                <span>Test Case Name</span>
                {getSortIcon('name')}
              </button>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-96">
              Description
            </th>
            {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th> */}
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <Timer className="w-4 h-4" />
                <span> </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
              <Hash className="w-4 h-4" />
                <span> </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          
           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <button
                onClick={() => handleSort('datetime')}
                className="inline-flex items-center space-x-1 hover:text-gray-700"
              >
                <span>Date/Time</span>
                {getSortIcon('datetime')}
              </button>
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
            {/* <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>  */}
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
              <td className="px-6 py-4 whitespace-pre-line text-sm text-gray-900 max-w-xs truncate">
                {testCase.description || '-'}
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {testCase.location ? (
                  <div className="flex items-center space-x-2">
                    <span>{getShortLocation(testCase.location)}</span>
                    <button
                      onClick={() => handleCopyLocation(testCase.location!)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      title="Copy full location"
                    >
                      {copiedLocation === testCase.location ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                ) : (
                  '-'
                )}
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {testCase.duration ? `${Math.floor(testCase.duration)}ms` : '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {testCase.counter ?? '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {testCase.action || '-'}
              </td>
             
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {testCase.datetime || '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => setSelectedTestCase(testCase)}
                  className="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View All Data
                </button>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap text-right">
                <button
                  onClick={() => handleRunTest(testCase.name)}
                  className="inline-flex items-center p-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  title="Run Test"
                >
                   <Play className="h-4 w-4" /> 
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {renderPaginationControls()}
      {selectedTestCase && (
        <TestDetailsPopup
          testCase={selectedTestCase}
          onClose={() => setSelectedTestCase(null)}
        />
      )}
    </div>
  );
};