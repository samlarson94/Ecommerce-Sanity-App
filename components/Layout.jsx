import React from 'react';
// Note: Head = metadata much like in HTML
import Head from 'next/head'; 

import Navbar from './Navbar';
import Footer from './Footer';


const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Speaker City</title>
      </Head>
      <header>
        <NavBar />
      </header>

      <main className="main-container">
        EMPTY
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    
  )
}

export default Layout