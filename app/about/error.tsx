'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log('Error');
  }, [error]);

  return (
    <>
      <h1>Error: Something went wrong</h1>

      <button
        onClick={() => {
          reset();
        }}>
        go back
      </button>
    </>
  );
}
