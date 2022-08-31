import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container'>
      <Head>
        <title>Helper</title>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml'></link>
      </Head>

      <main>
        <Nav />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Container;
