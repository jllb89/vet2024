import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Info from './components/info';
import Mailing from './components/mailing';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Info />
        <Mailing />
      </main>
    </div>
  );
};

export default Home;
