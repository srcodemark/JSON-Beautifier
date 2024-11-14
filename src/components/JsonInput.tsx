import React from 'react';
import { Trash } from 'lucide-react';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export function JsonInput({ value, onChange, onClear }: JsonInputProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">Input JSON</label>
        <button
          onClick={onClear}
          className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors"
        >
          <Trash className="w-4 h-4 mr-1" />
          Clear
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your JSON here..."
        className="w-full h-[400px] p-4 text-sm font-mono bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}