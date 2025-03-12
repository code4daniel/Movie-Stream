// import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {


    
  return (
    <div className={cn('z-20 min-w-screen flex flex-col overflow-hidden text-white mx-auto fixed', isScrolled ? 'bg-slate-900 drop-shadow-md' : 'bg-transparent' ) } >
        <div className="flex px-8  justify-center sm:justify-between py-4">
            <Link className=" flex flex-row items-center  space-x-2" to="/">
                <img src="/logo.png" className="object-cover w-12 h-8" alt="logo" />
                <h1 className="text-lg">AlphaMovies</h1>
            </Link>
            <div className=" items-center hidden  sm:flex justify-between space-x-4 text-xl ">
                <Link to='/'>Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/tvshows">Tv Shows</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar