import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

interface CopyableTextProps {
  text: string;
  displayText: string;
}

export const CopyableText: React.FC<CopyableTextProps> = ({ text, displayText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="flex items-center group">
      <span className="text-sm font-medium text-gray-900">{displayText}</span>
      <button
        onClick={handleCopy}
        className="ml-2 p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
        title={`Copy full class name: ${text}`}
      >
        {copied ? (
          <CheckCircle2 className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};