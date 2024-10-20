// app/search/web/page.jsx
import WebSearchClient from '@/components/WebSearchClient';
import Link from 'next/link';

export default async function WebSearchPage({ searchParams }) {
  const searchTerm = searchParams.searchTerm || ''; // Get the search term from the query
  const startIndex = searchParams.start || '1';

  if (!searchTerm) {
    return <p>Please provide a search term.</p>;
  }

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
  );

  if (!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for {searchTerm}</h1>
        <p className="text-lg">
          Try searching the web{' '}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <WebSearchClient results={results} />;
}
