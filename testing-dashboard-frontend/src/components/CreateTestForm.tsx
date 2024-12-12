import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle, CheckCircle } from 'lucide-react';
import type { FormData } from '../types/forms';
import { generateTestPayload } from '../utils/generateTestPayload';

export const CreateTestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    namespaceName: '',
    unitTestClassName: '',
    testCaseName: '',
    testCaseCode: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jsonPreview, setJsonPreview] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const payload = generateTestPayload(formData);

    try {
      await axios.post('http://localhost:62773/csp/unittest/create/', payload);
      setStatus({
        type: 'success',
        message: 'Test case created successfully!',
      });
      // Reset form
      setFormData({
        projectName: '',
        namespaceName: '',
        unitTestClassName: '',
        testCaseName: '',
        testCaseCode: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to create test case',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    const previewPayload = generateTestPayload({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setJsonPreview(JSON.stringify(previewPayload, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="namespaceName" className="block text-sm font-medium text-gray-700 mb-1">
          Namespace
        </label>
        <input
          type="text"
          id="namespaceName"
          name="namespaceName"
          value={formData.namespaceName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="unitTestClassName" className="block text-sm font-medium text-gray-700 mb-1">
          Unit Test Class Name
        </label>
        <input
          type="text"
          id="unitTestClassName"
          name="unitTestClassName"
          value={formData.unitTestClassName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="testCaseName" className="block text-sm font-medium text-gray-700 mb-1">
          Test Case Name
        </label>
        <input
          type="text"
          id="testCaseName"
          name="testCaseName"
          value={formData.testCaseName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="testCaseCode" className="block text-sm font-medium text-gray-700 mb-1">
          Test Case Code
        </label>
        <textarea
          id="testCaseCode"
          name="testCaseCode"
          value={formData.testCaseCode}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 font-mono"
        />
      </div>

      <div className="mt-8">
        <label htmlFor="jsonPreview" className="block text-sm font-medium text-gray-700 mb-2">
          Generated JSON Preview
        </label>
        <textarea
          id="jsonPreview"
          value={jsonPreview}
          readOnly
          rows={20}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 font-mono text-sm"
        />
      </div>

      {status.type && (
        <div
          className={`p-4 rounded-md ${
            status.type === 'success' ? 'bg-green-50' : 'bg-red-50'
          }`}
        >
          <div className="flex items-center">
            {status.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
            )}
            <p
              className={`text-sm ${
                status.type === 'success' ? 'text-green-700' : 'text-red-700'
              }`}
            >
              {status.message}
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isSubmitting
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        }`}
      >
        {isSubmitting ? 'Creating...' : 'Create Test'}
      </button>
    </form>
  );
};