import React from 'react'
import Navbar from '../components/Navbar'
import {Hero}  from '../components/Hero';
import { HomeContent } from '../components/HomeContent';

const Home = () => {
  return (
    <div className='min-h-screen w-auto bg-black/100 '>
        <Navbar />
        <Hero/>
        <HomeContent/>
    </div>
  )
}

export default Home
