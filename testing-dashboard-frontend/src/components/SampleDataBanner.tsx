import React from 'react';
import { Database } from 'lucide-react';

export const SampleDataBanner: React.FC = () => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
      <div className="flex items-center">
        <Database className="w-5 h-5 text-blue-400 mr-3" />
        <p className="text-blue-700">
          Viewing sample data mode - API calls are disabled
        </p>
      </div>
    </div>
  );
};