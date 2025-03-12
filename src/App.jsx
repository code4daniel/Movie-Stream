/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import {useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Search from "./components/Search";
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar/Navbar';





const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    
      <div className="wrapper"> 
        {/* <Navbar/>
        <header className='flex flex-col items-center'>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy Without the Hassle</h1>
        </header> */}

        <section className='flex flex-col items-center'>
          
          <Navbar/>
          
          <Outlet/>
        </section>
        
      </div>
    
  )
}

export default App
