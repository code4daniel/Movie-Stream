/* eslint-disable no-unused-vars */

import { useState,useEffect } from "react";
import { fetchPopularMovies } from "../services/mediaServices";
import { BiSearch } from "react-icons/bi";
import { BsSearchHeart, BsStarFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const Movies = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    //implement lazy loading
    //implement caching

    useEffect(() => {
        const loadMediaFiles = async() => {
            const data = await fetchPopularMovies();
            
            setPopularMovies(data.results || []);
            console.log("Popular Movies: ", data);
        }
        loadMediaFiles();
    },[])

     // Roundinf the rating to 1 decimal place
//   let rating = parseFloat((popularMovies.vote_average)?.tofixed(1))
  console.log(popularMovies)
  if (popularMovies.runtime && typeof popularMovies.runtime === 'number') {
    const duration = `${Math.floor(popularMovies.runtime/60)}h ${popularMovies.runtime %60}m `
    console.log(duration)
    }else{
    console.log('Runtime not available')
    }
  
    return (
        <div className='min-h-screen w-auto bg-black/100 text-white overflow-hidden scroll-p-0 '>
            <div className="flex flex-col mx-4 md:mx-28 mt-20 gap-8 ">
                {/* Movie List */}
                {/* Map through movies */}
                {/* Render Movie Card */}
                {/* Add pagination */}
                {/* Add sorting functionality */}
                {/* Add filtering functionality */}
                {/* Add search functionality */}
                {/* Add loading state */}
                {/* Add error handling */}
                {/* new Movies */}

                {/* Search */}

                <div className=" items-center  md:mx-36 flex bg-orange-500 px-8 rounded-3xl">
                    <input type="text" placeholder="Search Movies || Tv Shows" className="w-full outline-0 py-4  rounded-3xl  items-center"/>
                    <IoMdSearch size={25}/>
                </div>


                <div className="flex justify-center w-full  gap-4">
                    <span className="px-4 bg-orange-800 rounded-md py-2">Trending</span>
                    <span className="px-4 bg-orange-800 rounded-md py-2">Trending</span>
                    <span className="px-4 bg-orange-800 rounded-md py-2">Popular</span>
                    <span className="px-4 bg-orange-800 rounded-md py-2">Top Rated</span>
                    <span className="px-4 bg-orange-800 rounded-md py-2">Upcoming</span>
                    <span className="px-4 bg-orange-800 rounded-md py-2">Now Playing</span>
                    <span className="px-4 bg-orange-800 rounded-md py-2">Coming Soon</span>
                    <span className="px-4 bg-orange-800 rounded-md py-2">Action</span>
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-7 gap-2 sm:grid-cols-4 sm:gap-4 md:gap-4 mx-auto">
                    {popularMovies.map((movie) => {
                        return (   
                            <div key ={movie.id} className="flex flex-col items-center rounded-md mb-8 relative  gap-2">
                                <div className="w-[180px] relative rounded-lg">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}  className=" w-auto object-cover  rounded-md"/>

                                    {/* bg  Gradient overlay */}
                                    <div className="absolute flex items-end w-[180px]  bg-gradient-to-t from-black to-bg-black/30 h-28 bottom-0 justify-between  left-0 right-0 text-center pb-2">
                                    {/* <div className="absolute flex justify-end bottom-0 pb-1 items-center gap-4 bg-amber-100 bg-gradient-to-t from-black to-bg-white"> */}
                                        <div className=" text-center rounded-md text-orange-600 font-bold px-4 py-2 text-xs opacity-80">{movie.release_date.split('-')[0]}</div>
                                        <div className="text-white  px-4 py-1.5 items-center rounded-md text-xs gap-1  flex opacity-70"><BsStarFill className='text-yellow-500' size={15}/>{movie.vote_average.toFixed(1)}</div>

                                </div>
                                
                                </div>
                                
                                <h2>{movie.title}</h2>
                                
                            </div>     
                        )
                    })}
                </div> 
                
            </div>
        </div>
    );
}
export default Movies;