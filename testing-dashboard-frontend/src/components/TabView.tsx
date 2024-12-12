import React from 'react';
import { Settings } from 'lucide-react';
import type { Settings as SettingsType } from '../types/settings';

interface TabViewProps {
  activeTab: 'tests' | 'create';
  onTabChange: (tab: 'tests' | 'create') => void;
  onSettingsClick: () => void;
}

export const TabView: React.FC<TabViewProps> = ({
  activeTab,
  onTabChange,
  onSettingsClick,
}) => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex -mb-px">
          <button
            onClick={() => onTabChange('tests')}
            className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
              activeTab === 'tests'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            View Tests
          </button>
          <button
            onClick={() => onTabChange('create')}
            className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
              activeTab === 'create'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Create Test
          </button>
        </div>
        <button
          onClick={onSettingsClick}
          className="flex items-center space-x-2 px-4 py-2 text-gray-500 hover:text-gray-700"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};