import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { JsonInput } from './components/JsonInput';
import { JsonOutput } from './components/JsonOutput';
import { Toast } from './components/Toast';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);

  const formatJSON = () => {
    try {
      if (!input.trim()) {
        setError('Please enter some JSON');
        setOutput('');
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (err) {
      setError('Invalid JSON format');
      setOutput('');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setShowToast(true);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">JSON Beautifier</h1>
          <p className="text-gray-600">Transform your JSON into a beautiful, readable format</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <JsonInput value={input} onChange={setInput} onClear={clearAll} />
          <JsonOutput value={output} error={error} onCopy={copyToClipboard} />
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={formatJSON}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
          >
            <Wand2 className="w-5 h-5 mr-2" />
            Beautify JSON
          </button>
        </div>

        <Toast 
          message="Copied to clipboard!"
          isVisible={showToast}
          onHide={() => setShowToast(false)}
        />
      </div>
    </div>
  );
}

export default App;