import React from 'react';
import { useState, useEffect } from 'react';
import { FileCode2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { RefreshButton } from './components/RefreshButton';
import type { Settings as SettingsType } from './types/settings';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorBanner } from './components/ErrorBanner';
import { TestList } from './components/TestList';
import { SettingsPanel } from './components/SettingsPanel';
import { SampleDataBanner } from './components/SampleDataBanner';
import { CreateTestForm } from './components/CreateTestForm';
import { TestStatistics } from './components/TestStatistics';
import { TabView } from './components/TabView';
import { useDataFetching } from './hooks/useDataFetching';
import { formatDate } from './utils/formatDate';

function App() {
  const [countdown, setCountdown] = useState(30);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'tests' | 'create'>('tests');
  const [runningTests, setRunningTests] = useState(false);
  const [settings, setSettings] = useState<SettingsType>({
    apiUrl: 'http://localhost:62773/csp/unittest/service/results',
    runTestsUrl: 'http://localhost:62773/csp/unittest/service/runtestasync',
    useSampleData: false,
    useSampleDataOnError: true,
    refreshInterval: 120000,
    disableRefresh: false,
  });
  
  const { data, loading, error, lastFetchTime, fetchData } = useDataFetching(settings);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRunAllTests = async () => {
    try {
      setRunningTests(true);
      await axios.get(settings.runTestsUrl);
      // Show success message that will auto-dismiss
      setTimeout(() => setRunningTests(false), 5000);
    } catch (error) {
      console.error('Failed to run tests:', error);
      setRunningTests(false);
    }
  };

  const hasTests = data?.Namespace?.UnitTestClasses?.some(cls => 
    cls.testCaseList && cls.testCaseList.length > 0
  ) ?? false;

  const renderMainContent = () => {
    if (!settings.apiUrl.trim() && !settings.useSampleData) {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No Data Source Configured</h2>
              <p className="text-gray-600 mb-4">
                Please configure an API URL in settings to view test results.
              </p>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Open Settings
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="flex-grow">
            <h1 className="text-2xl font-bold text-gray-900 pb-2">Unit Testing Dashboard</h1>
            <h2 className="pt-2">
              Project Name: {data?.Name || 'Testing Project'}
            </h2>
            <div className="space-y-2">
              <p className="text-gray-500">Namespace: {data?.Namespace?.Name}</p>
              {data?.Namespace && (
                // <div className="flex items-center space-x-2 mt-1">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {data.Namespace.UnitTestClasses.length} Unit Tests
                  </span>
                // </div>
              )}
              <div className="flex items-center space-x-2">
                {lastFetchTime && (
                  <span className="text-gray-500 text-xs">
                    Last updated: {formatDate(lastFetchTime)} • {settings.disableRefresh ? 'Auto-refresh disabled' : `Refresh every ${settings.refreshInterval / 60000} minutes`}
                  </span>
                )}
                <RefreshButton onRefresh={fetchData} />
              </div>
            </div>
          </div>
          <button
            onClick={handleRunAllTests}
            disabled={settings.useSampleData || !hasTests || runningTests}
            className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              settings.useSampleData || !hasTests || runningTests
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {runningTests ? 'Running Tests...' : 'Run All Tests in Project'}
          </button>
        </div>

        {runningTests && (
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-blue-400 mr-3" />
              <p className="text-blue-700">
                Tests are now running. Results will appear as they become available during the next few refreshes.
              </p>
            </div>
          </div>
        )}

        {loading && <LoadingSpinner countdown={countdown} />}
        {error && <ErrorBanner message={error} />}
        {settings.useSampleData && <SampleDataBanner />}

        {!loading && data?.Namespace?.UnitTestClasses && (
          <>
            <TestStatistics 
              testCases={data.Namespace.UnitTestClasses.flatMap(
                cls => cls.testCaseList || []
              )} 
            />
            <TestList unitTestClasses={data.Namespace.UnitTestClasses} />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto px-8 py-8">
        <TabView
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onSettingsClick={() => setIsSettingsOpen(true)}
        />
        
        <div className="mt-6">
          {activeTab === 'create' ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-8">
                <FileCode2 className="w-8 h-8 text-blue-500" />
                <h1 className="text-2xl font-bold text-gray-900">Create New Test</h1>
              </div>
              <CreateTestForm />
            </div>
          ) : renderMainContent()}
        </div>
      </div>
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSettingsChange={setSettings}
      />
    </div>
  );
}

export default App;