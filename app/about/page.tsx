import Link from 'next/link';
import React from 'react';
Link;

const About = () => {
  // throw new Error('This is an error from the about page');

  return (
    <>
      <h1>About</h1>

      <Link href="/" className={`underline text-blue-400 font-bold   `}>
        Home
      </Link>
    </>
  );
};

export default About;
