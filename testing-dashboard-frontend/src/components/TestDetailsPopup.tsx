import React from 'react';
import { X, CheckCircle2, XCircle, Clock, Timer, Hash, Copy, Check } from 'lucide-react';
import type { TestCase } from '../types/testing';
import { getShortLocation } from '../utils/getShortLocation';

interface TestDetailsPopupProps {
  testCase: TestCase;
  onClose: () => void;
}

export const TestDetailsPopup: React.FC<TestDetailsPopupProps> = ({ testCase, onClose }) => {
  const [copiedLocation, setCopiedLocation] = React.useState<string | null>(null);

  const handleCopyLocation = async (location: string) => {
    try {
      await navigator.clipboard.writeText(location);
      setCopiedLocation(location);
      setTimeout(() => setCopiedLocation(null), 2000);
    } catch (err) {
      console.error('Failed to copy location:', err);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Passed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case 'Failed':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <Clock className="w-6 h-6 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Failed':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Test Case Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-8 space-y-8">
          {/* Status */}
          <div className={`flex items-center space-x-3 p-6 rounded-lg border ${getStatusColor(testCase.status)}`}>
            {getStatusIcon(testCase.status)}
            <span className="font-medium text-lg">{testCase.status}</span>
          </div>

          {/* Test Case Name */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">Test Case Name</h3>
            <p className="text-xl font-medium text-gray-900">{testCase.name}</p>
          </div>

          {/* Description */}
          {testCase.description && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
              <p className="text-gray-900 whitespace-pre-wrap bg-gray-50 rounded-lg p-6 border border-gray-200">
                {testCase.description}
              </p>
            </div>
          )}

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-1">
                <Timer className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-medium text-blue-600">Duration</h3>
              </div>
              <p className="text-xl font-medium text-blue-900">
                {testCase.duration ? `${testCase.duration}ms` : 'N/A'}
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-1">
                <Hash className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-medium text-purple-600">Counter</h3>
              </div>
              <p className="text-xl font-medium text-purple-900">
                {testCase.counter ?? 'N/A'}
              </p>
            </div>
          </div>

          {/* Location */}
          {testCase.location && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
              <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-6 border border-gray-200">
                <code className="text-gray-900 font-mono text-sm flex-grow">
                  {testCase.location}
                </code>
                <button
                  onClick={() => handleCopyLocation(testCase.location!)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  title="Copy full location"
                >
                  {copiedLocation === testCase.location ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Action */}
          {testCase.action && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Action</h3>
              <p className="text-gray-900">{testCase.action}</p>
            </div>
          )}

          {/* Date/Time */}
          {testCase.datetime && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Date/Time</h3>
              <p className="text-gray-900">{new Date(testCase.datetime).toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};