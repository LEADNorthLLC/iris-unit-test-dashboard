import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';

interface RefreshButtonProps {
  onRefresh: () => Promise<void>;
  className?: string;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh, className = '' }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className={`p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full disabled:opacity-50 ${className}`}
      title="Refresh data"
    >
      <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
    </button>
  );
};