import React from 'react';

const page = () => {
  return (
    <div className='text-center '>
      <h1>Welcome to Naria Holidays</h1>
      <p>This is a simple holiday website built with Next.js</p>
      <a href="https://nextjs.org">Learn More</a>
      <p>Powered by <a href="https://vercel.com">Vercel</a></p>
      <p>Built by <a href="https://github.com/r91">R91</a></p>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default page;