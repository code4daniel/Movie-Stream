/* eslint-disable no-unused-vars */

import { useState,useEffect } from "react";

// Imported Icons
import { BiSearch } from "react-icons/bi";
import { BsSearchHeart, BsStarFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

// Imported components
import { fetchPopularMovies , fetchFromAPI, getMovieByCategory} from "../services/mediaServices";
import { Search } from "../components/Search"

const tabs = [
    {label: "Trending", key: "trending"},
    {label: "Popular", key: "popular"},
    {label: "Top Rated", key: "top_rated"},
    {label: "Upcoming", key: "upcoming"},
    {label: "Popular TV Shows", key: "popular_shows"},
    {label: "Top Rated TV Shows", key: "top_rated_shows"},
    {label: "Animation", key: "animation"},
    {label: "Kids", key: "kids"},
    {label: "Horror", key: "horror"},
    {label: "Romance", key: "romance"},
    {label: "Science Fiction", key: "science_fiction"},
    {label: "Documentary", key: "documentary"},
    {label: "Adventure", key: "adventure"},
    {label: "Western", key: "western"},
    {label: "Film-Noir", key: "film_noir"},
    {label: "Comedy", key: "comedy"},
    {label: "Crime", key: "crime"},
];


const Movies = () => {

   

    const [movies, setMovies] = useState([]);
    const [activeTab, setActiveTab] = useState("Trending");
    const [searchTerm, setSearchTerm] = useState("");

    const fetchMovies = async(tabKey) => {
        const data = await getMovieByCategory(tabKey);
        console.log("Fetched Movies", data)
        setMovies(data.results);
    };

    useEffect(() => {
        fetchMovies(activeTab);
    }, [activeTab]);
    
  
    return (
        <div className='min-h-screen w-auto bg-black/100 text-white overflow-hidden scroll-p-0 '>
            <div className="flex flex-col mx-4 md:mx-28 mt-20 gap-8 ">
                <Search/>

            {/* categroy movies tabs */}
                <div className="flex justify-center w-full flex-wrap gap-4  mx-auto">
                    { tabs.map((tab) => (
                        <span 
                            key={tab.key} 
                            className={`px-4 ${tab.key === activeTab? "bg-orange-500" : "bg-slate-500"} rounded-md py-2 text-white cursor-pointer hover:bg-orange-600 transition duration-300 `} 
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </span>
                    ))}
                </div>

            {/* Movie list */}
                <div className=" flex flex-wrap gap-4 mx-auto items-center justify-center  ">
                    {movies.map((movie) => {
                        return (   
                            <div key ={movie.id} className="flex flex-col items-center rounded-md mb-8 relative  gap-2 ">
                                <div className="w-[180px] relative rounded-lg">
                                    <img 
                                        loading="lazy"
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                                        alt={movie.title}  
                                        className=" w-auto object-cover  rounded-md"/>

                                    {/* bg  Gradient overlay */}
                                    <div className="absolute flex items-end w-[180px]  bg-gradient-to-t from-black to-bg-black/30 h-28 bottom-0 justify-between  left-0 right-0 text-center pb-2">
                                    {/* <div className="absolute flex justify-end bottom-0 pb-1 items-center gap-4 bg-amber-100 bg-gradient-to-t from-black to-bg-white"> */}
                                        <div className=" text-center rounded-md text-orange-600 font-bold px-4 py-2 text-xs opacity-80">{movie.release_date.split('-')[0]}</div>
                                        <div className="text-white  px-4 py-1.5 items-center rounded-md text-xs gap-1  flex opacity-70"><BsStarFill className='text-yellow-500' size={15}/>{movie.vote_average.toFixed(1)}</div>

                                </div>
                                
                                </div>
                                
                                <h2 className="text-wrap">{movie.title}</h2>
                                
                            </div>     
                        )
                    })}
                </div> 
                
            </div>
        </div>
    );
}
export default Movies;