'use client';
import { useSearchParams } from 'next/navigation';
import WebSearchResults from '@/components/WebSearchResults';

export default function WebSearchClient({ results }) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');

  return <WebSearchResults results={results} searchTerm={searchTerm} />;
}