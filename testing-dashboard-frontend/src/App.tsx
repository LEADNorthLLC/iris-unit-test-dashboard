import React from 'react';
import { useState, useEffect } from 'react';
import { FileCode2 } from 'lucide-react';
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
  const [settings, setSettings] = useState<SettingsType>({
    apiUrl: 'http://localhost:62773/csp/unittest/service/',
    useSampleData: false,
    useSampleDataOnError: true,
  });
  
  const { data, loading, error, lastFetchTime } = useDataFetching(settings);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <TabView
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onSettingsClick={() => setIsSettingsOpen(true)}
        />
        
        <div className="mt-6">
          {activeTab === 'create' ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Create New Test</h1>
              </div>
              <CreateTestForm />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 pb-2">Integration Testing Dashboard</h1>
                
                  <h2 className="pt-2">
                    {data?.Name || 'Testing Project'}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <p className="text-gray-500">Namespace: {data?.Namespace?.Name}</p>
                    {data?.Namespace && (
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {data.Namespace.UnitTestClasses.length} Unit Tests
                        </span>
                        {lastFetchTime && (
                          <span className="text-gray-500 text-xs">
                            Last updated: {formatDate(lastFetchTime)}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

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
          )}
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