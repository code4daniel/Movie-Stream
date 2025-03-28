/* eslint-disable no-unused-vars */

import { useState,useEffect } from "react";
import { fetchAnimationMovies, fetchPopularMovies } from "../services/mediaServices";
import { BiSearch } from "react-icons/bi";
import { BsSearchHeart } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const Animations = () => {

    const [animeMovies, setAnimeMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    //implement lazy loading
    //implement caching

    useEffect(() => {
        const loadMediaFiles = async() => {
            const data = await fetchAnimationMovies();
            
            setAnimeMovies(data.results || []);
            console.log("Popular Movies: ", data);
        }
        loadMediaFiles();
    },[])

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
                    {animeMovies.map((anime) => {
                        return (   
                            <div key ={anime.id} className="flex flex-col items-center rounded-md mb-8 relative ">
                                <div className="w-[180px] relative rounded-lg">
                                    <img src={`https://image.tmdb.org/t/p/original${anime.poster_path}`} alt={anime.title}  className=" w-auto object-cover "/>
                                    
                                
                                </div>
                                <span className="absolute text-end rounded-md bg-black px-4 py-2 text-xs">{anime.release_date.split('-')[0]}</span>
                                <h2>{anime.title}</h2>
                                
                            </div>     
                        )
                    })}
                </div> 
                
            </div>
        </div>
    );
}
export default Animations;