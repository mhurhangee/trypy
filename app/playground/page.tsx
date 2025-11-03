"use client"

import dynamic from 'next/dynamic';

const PythonNotebook = dynamic(
  () => import('@/components/python-notebook'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Python Notebook</h1>
      <PythonNotebook />
    </main>
  );
}