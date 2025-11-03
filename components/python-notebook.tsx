// components/PythonNotebook.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import type { PyodideInterface } from 'pyodide';

declare global {
  interface Window {
    loadPyodide: (config?: { indexURL?: string }) => Promise<PyodideInterface>;
  }
}


export default function PythonNotebook() {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [code, setCode] = useState('print("Hello from Python!")');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPyodide() {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js';
      document.head.appendChild(script);

      script.onload = async () => {
        // TypeScript now knows about window.loadPyodide
        const pyodideInstance = await window.loadPyodide();
        setPyodide(pyodideInstance);
        setLoading(false);
      };
    }
    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodide) return;
    
    try {
      await pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);
      
      const result = await pyodide.runPythonAsync(code);
      const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
      
      setOutput(stdout || String(result));
    } catch (error) {
      setOutput(`Error: ${(error as Error).message}`);
    }
  };

  if (loading) {
    return <div className="p-4">Loading Pyodide...</div>;
  }

  return (
    <div className="space-y-4 p-4">
      <Card>
        <CardContent className="pt-6">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write Python code here..."
            className="font-mono min-h-[200px]"
          />
          <Button onClick={runCode} className="mt-4">
            Run Code
          </Button>
        </CardContent>
      </Card>

      {output && (
        <Card>
          <CardContent>
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {output}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}