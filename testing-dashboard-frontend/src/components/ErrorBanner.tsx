import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorBannerProps {
  message: string;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
      <div className="flex items-center">
        <AlertCircle className="w-5 h-5 text-amber-400 mr-3" />
        <p className="text-amber-700">
          {message}
        </p>
      </div>
    </div>
  );
};