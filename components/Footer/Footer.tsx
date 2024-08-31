import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-6 py-4 justify-center flex items-center bg-secondary text-primary text-xs gap-2">
      <span>Created by: </span>
      <>
        <Link
          href="https://instagram.com/karunawedding"
          target="_blank"
          className="flex items-center gap-1 text-primary underline"
        >
          <span>@karunawedding</span>
        </Link>
      </>
    </div>
  );
};

export default Footer;
