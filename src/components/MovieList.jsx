/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

// import MovieCard from "./MovieCard"
import {  useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";
import {API_BASE_URL, API_OPTIONS} from "./tmdb_url";
// import Search from "./Search";


const MovieList = ({searchTerm}) => {
    const [movieList, setMovieList] = useState([]);
    const [isLoadng, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // const TMDB_URL = TMDB_URL();

    const fetchMovies = async () => {
        setErrorMessage('');
        setIsLoading(true);

        try {
            const endpoint = searchTerm 
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}`
                :`${API_BASE_URL}/list/56?language=en-US&page=1`  ;
            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error('Failed to Fetch Movies'); 
            }

            const  data = await response.json();
            console.log("the json data is ", data)
            if (data.response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
        } catch (error) {
            console.error(`Error Fetching Movies ${error} `);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    },[searchTerm])
    

  return (
    <div className="text-white px-* h-full mt-28 min-h-screen">
      {/* <Search searchTerm={searchTerm} className=""/> */}
         {isLoadng ? (
            <p className='text-white'>Loading...</p>
          ) : errorMessage ? (
            <p className='text-white'>{errorMessage}</p>
          ) : (
            
          <div className='text-slate-600 space-x-2 space-y-4 px-8 md:px-* flex flex-row flex-wrap py-8 justify-center'>
            {movieList.map((movie) => (
              <div className=' space-y-* w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/8  overflow-hidden  rounded-lg' key={movie.id} onClick={() =>  navigate(`/movie/${movie.id}`)}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} className="rounded-lg object-fill"/>
                <div className='flex flex-col items-center '>
                <p className='text-[16px] text-center'>{movie.original_title}</p>
                <p className="mb-2 text-md">{movie.vote_average} / 10</p>
                <p>{movie.release_date}</p>
                </div>
              </div>
          ))}
          </div>
        
          )
          }
      
    </div>
  )
}

export default MovieList
