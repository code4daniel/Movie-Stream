/* eslint-disable no-unused-vars */

import { useState,useEffect } from "react";
import { fetchPopularMovies } from "../services/mediaServices";

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

    return (
        <div className="flex mx-36 mt-18 bg-black/30">
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
             <h2 className="text-center text-2xl">Popular Movies</h2>
            <div className="  flex flex-row gap-4 mx-16">
                {popularMovies.map((movie) => {
                    return (   
                        <div key ={movie.id} className="flex flex-col items-center rounded-md mb-8 relative ">
                            <div className="w-[180px] relative ">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}  className=" w-auto object-cover "/>
                                
                            
                            </div>
                            <span className="absolute text-end rounded-md bg-black px-4 py-2 text-xs">{movie.release_date.split('-')[0]}</span>
                            <h2>{movie.title}</h2>
                            
                        </div>     
                    )
                })}
            </div> 
            
        </div>
    );
}
export default Movies;