import React from 'react';
import { AlertCircle } from 'lucide-react';
import { sampleData } from '../utils/sampleData';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-50 p-6 rounded-lg">
      <div className="flex items-center space-x-3 mb-4">
        <AlertCircle className="w-6 h-6 text-red-500" />
        <h3 className="text-lg font-semibold text-red-700">Error</h3>
      </div>
      <p className="text-red-600 mb-4">{message}</p>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Expected Data Structure:</h4>
        <pre className="bg-white p-4 rounded border border-red-200 overflow-auto text-sm">
          {JSON.stringify(sampleData, null, 2)}
        </pre>
      </div>
    </div>
  );
};