import React from 'react';

export default function App() {
  return (
    <div
    className="dark:bg-zinc-700 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid dark:border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
  );
}