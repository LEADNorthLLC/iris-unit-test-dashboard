import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import type { TestProject } from '../types/testing';
import type { Settings } from '../types/settings';
import { sampleData } from '../utils/sampleData';

export function useDataFetching(settings: Settings) {
  const [data, setData] = useState<TestProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);

  const fetchData = useCallback(async () => {
    if (settings.useSampleData) {
      setData(sampleData);
      setError(null);
      setLastFetchTime(new Date());
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get<TestProject>(settings.apiUrl);
      setData(response.data);
      setError(null);
      setLastFetchTime(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching the data');
      if (settings.useSampleDataOnError) {
        setData(sampleData);
        setLastFetchTime(new Date());
      }
    } finally {
      setLoading(false);
    }
  }, [settings.apiUrl, settings.useSampleData, settings.useSampleDataOnError]);

  useEffect(() => {
    fetchData();
    
    const intervalId = setInterval(() => {
      fetchData();
    }, 120000); // 2 minutes in milliseconds

    return () => clearInterval(intervalId);
  }, [fetchData]);

  return { data, loading, error, lastFetchTime };
}