import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  countdown: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ countdown }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      <p className="text-gray-600 font-medium">
        Loading data... {countdown}s
      </p>
    </div>
  );
};