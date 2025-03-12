/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { API_BASE_URL, API_OPTIONS } from './tmdb_url';
import { useParams } from 'react-router-dom';
import SimilarMoviesList from './SimilarMovies';

const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie ] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // 
    const fetchMovieDetails = async () => {
        try{
            const response = await fetch(`${API_BASE_URL}/movie/${id}`, API_OPTIONS);
            if(!response.ok) {
              throw new Error('Failed to fetch movie details');
            }
            const data = await response.json();
            setMovie(data);
        } catch(error){
            setErrorMessage('Error fetching movies, Please try again later');
            console.error(`Error fetching Movies details ${error}`)
        }
    }
    useEffect(() =>{
      fetchMovieDetails();
    }, [id]);

    if (!movie){
      return <div>Loading...</div>
    }

    

  return (
    <div className='flex flex-col text-slate-800 text-center justify-center  mt-[50px] mx-24 '>
      <div className='relative min-h-screen'>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='w-full object-cover' />

        <div className='absolute flex bg-indigo-500 text-left px-8 py-8 mx-24 rounded-lg h-auto -bottom-0 sm:-bottom-36 space-x-4 '>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className=' object-cover w-[200px]  rounded-lg' />
          <div className='flex flex-col justify-center space-y-8'>
            <h1 className='text-4xl font-bold'>{movie.title}</h1>
            <div className='space-y-2 mt-2'>
              <p className='font-bold'>Sypnosis: <span className='font-normal tracking-tight leading-2'>{movie.overview}</span></p>
              <div className='flex justify-between'>
                <p>Release Date: {movie.release_date}</p>
                <p> Language: {movie.original_language}</p>
                <p>Vote Average: {movie.vote_average} / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='mt-[140px]'>
        <h1 className='text-2xl font-bold'>Similar Movies:</h1>
          <SimilarMoviesList movieId={id}/>
      </div>
      
    </div>
        
  )
}

export default MovieDetail
