import React from 'react';
import { X, RotateCcw } from 'lucide-react';
import type { Settings } from '../types/settings';
import { validateUrl } from '../utils/validateUrl';
import { sampleData, defaultSampleData } from '../utils/sampleData';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
}

interface ValidationState {
  isValid: boolean;
  message: string;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
}) => {
  const [urlValidation, setUrlValidation] = React.useState<ValidationState>({
    isValid: true,
    message: ''
  });

  if (!isOpen) return null;
  
  const handleSampleDataChange = (value: string) => {
    try {
      const parsed = JSON.parse(value);
      Object.assign(sampleData, parsed);
    } catch (e) {
      // Ignore invalid JSON
    }
  };

  const handleUrlChange = (url: string) => {
    if (url.trim() === '') {
      setUrlValidation({
        isValid: false,
        message: 'API URL is required'
      });
    } else if (!validateUrl(url)) {
      setUrlValidation({
        isValid: false,
        message: 'Please enter a valid URL'
      });
    } else {
      setUrlValidation({ isValid: true, message: '' });
    }
    onSettingsChange({ ...settings, apiUrl: url });
  };

  const resetSampleData = () => {
    Object.assign(sampleData, defaultSampleData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="apiUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Test Results API URL
              </label>
              <input
                type="text"
                id="apiUrl"
                name="apiUrl"
                value={settings.apiUrl}
                disabled={settings.useSampleData}
                onChange={(e) => handleUrlChange(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md shadow-sm ${
                  settings.useSampleData 
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                    : urlValidation.isValid
                      ? 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      : 'border-red-300 focus:ring-red-500 focus:border-red-500'
                }`}
                placeholder="Enter API URL"
              />
              {!settings.useSampleData && !urlValidation.isValid && (
                <p className="mt-1 text-sm text-red-600">
                  {urlValidation.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="runTestsUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Run All Tests URL
              </label>
              <input
                type="text"
                id="runTestsUrl"
                name="runTestsUrl"
                value={settings.runTestsUrl}
                disabled={settings.useSampleData}
                onChange={(e) => {
                  const url = e.target.value;
                  if (url.trim() === '' || validateUrl(url)) {
                    onSettingsChange({ ...settings, runTestsUrl: url });
                  }
                }}
                className={`w-full px-3 py-2 border rounded-md shadow-sm ${
                  settings.useSampleData 
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                    : validateUrl(settings.runTestsUrl)
                      ? 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      : 'border-red-300 focus:ring-red-500 focus:border-red-500'
                }`}
                placeholder="Enter Run All Tests URL"
              />
              {!settings.useSampleData && !validateUrl(settings.runTestsUrl) && settings.runTestsUrl.trim() !== '' && (
                <p className="mt-1 text-sm text-red-600">
                  Please enter a valid URL
                </p>
              )}
            </div>

            <div>
              <label htmlFor="refreshInterval" className="block text-sm font-medium text-gray-700 mb-2">
                Data Refresh Interval
              </label>
              <select
                id="refreshInterval"
                value={settings.refreshInterval}
                onChange={(e) => onSettingsChange({ ...settings, refreshInterval: parseInt(e.target.value, 10) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={120000}>2 minutes</option>
                <option value={300000}>5 minutes</option>
                <option value={600000}>10 minutes</option>
                <option value={1800000}>30 minutes</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="useSampleData" className="text-sm font-medium text-gray-700">
                Use sample data instead of API
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="useSampleData"
                  className="sr-only peer"
                  checked={settings.useSampleData}
                  onChange={(e) =>
                    onSettingsChange({ ...settings, useSampleData: e.target.checked })
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="useSampleData" className="text-sm font-medium text-gray-700">
                Use sample data when API fails
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="useSampleData"
                  className="sr-only peer"
                  checked={settings.useSampleDataOnError}
                  onChange={(e) =>
                    onSettingsChange({ ...settings, useSampleDataOnError: e.target.checked })
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="sampleData" className="block text-sm font-medium text-gray-700">
                  Sample Data
                </label>
                <button
                  onClick={resetSampleData}
                  className="inline-flex items-center px-2 py-1 text-sm text-gray-600 hover:text-gray-900"
                  title="Reset to default sample data"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </button>
              </div>
              <textarea
                id="sampleData"
                className="w-full h-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm font-mono text-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue={JSON.stringify(sampleData, null, 2)}
                onChange={(e) => handleSampleDataChange(e.target.value)}
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}