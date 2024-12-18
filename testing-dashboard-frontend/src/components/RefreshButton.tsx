import React, { useState } from 'react';
import { RotateCw, PauseCircle, PlayCircle } from 'lucide-react';

interface RefreshButtonProps {
  onRefresh: () => Promise<void>;
  isRefreshEnabled: boolean;
  onToggleRefresh: () => void;
  className?: string;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({ 
  onRefresh, 
  isRefreshEnabled,
  onToggleRefresh,
  className = '' 
}) => {
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
    <div className="flex items-center space-x-1">
    <button
      onClick={handleRefresh}
      disabled={isRefreshing}
      className={`p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full disabled:opacity-50 ${className}`}
      title="Refresh data"
    >
      <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
    </button>
    <button
      onClick={onToggleRefresh}
      className={`p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full ${
        isRefreshEnabled ? 'text-green-500 hover:text-green-600' : 'text-red-500 hover:text-red-600'
      }`}
      title={isRefreshEnabled ? 'Disable auto-refresh' : 'Enable auto-refresh'}
    >
      {isRefreshEnabled ? (
        <PauseCircle className="w-4 h-4" />
      ) : (
        <PlayCircle className="w-4 h-4" />
      )}
    </button>
    </div>
  );
};
