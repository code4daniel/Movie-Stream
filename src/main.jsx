/* eslint-disable no-unused-vars */
import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MovieDetail from './components/MovieDetail.jsx';
import MovieList from './components/MovieList.jsx';
import Home from './components/Navbar/Home.jsx';
import Movies from './components/Navbar/Movies.jsx';
import TvShows from './components/Navbar/TvShows.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
      <Route path='/'  element={<Home/>}/>
      <Route path='/movies'  element={<Movies/>}/>
      <Route path='/tvshows'  element={<TvShows/>}/>
      <Route path='/movie/:id' element={<MovieDetail/>}/>
      {/* <Route path='/show/:id' element={<TvShowDetail/>}/> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
