import React from 'react';
import Header from '../components/header';
import Mainfold from '../components/mainfold';
import TopPicks from '../components/top-picks/index'
import AppDownload from '../components/app-download';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className='homepage'>
      <Header />
      <Mainfold />
      <TopPicks />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default Home