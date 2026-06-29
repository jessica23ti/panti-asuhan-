import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Highlight from './components/Highlight';
import HowToStart from './components/HowToStart';
import Programs from './components/Programs';
import FAQ from './components/FAQ';
import Articles from './components/Articles';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Highlight />
      <HowToStart />
      <Programs />
      <FAQ />
      <Articles />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
