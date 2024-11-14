import React from 'react';
import { Copy } from 'lucide-react';

interface JsonOutputProps {
  value: string;
  error: string;
  onCopy: () => void;
}

export function JsonOutput({ value, error, onCopy }: JsonOutputProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">Formatted Output</label>
        {value && (
          <button
            onClick={onCopy}
            className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </button>
        )}
      </div>
      <div className="relative">
        <pre
          className={`w-full h-[400px] p-4 text-sm font-mono bg-white border rounded-lg shadow-sm overflow-auto ${
            error ? 'border-red-300' : 'border-gray-200'
          }`}
        >
          {error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            <code className="text-gray-800">{value}</code>
          )}
        </pre>
      </div>
    </div>
  );
}