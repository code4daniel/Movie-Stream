// import React from 'react'
// import { Link } from "react-router-dom"

// import Slider from "../Slider"
// import LatestMovies from "../LatestMovies"
import MovieList from "../MovieList"
import TvShows from "./TvShows"

const Home = () => {
  return (
    <div className='text-black mt-24 flex flex-col px-* min-h-screen'>
      <h1 className="text-2xl">Popular Movies</h1>
      {/* <Slider/> */}
      <MovieList />
      <h1>Upcoming Series</h1>
      <TvShows/>
    </div>
  )
}

export default Home
