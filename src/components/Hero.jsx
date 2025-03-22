/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight, BiPlay, BiStar } from 'react-icons/bi'
import { fetchPopularMovies, fetchUpcomingMovies } from '../services/mediaServices';
import {Link} from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs';

export const Hero = () => {

  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieDetails, setMovieDetails] = useState(null);
  const [navbarBg, setNavbarBg] = useState('bg-transparent');


  // get movie detailed as you switch the slides correspondingly



  useEffect(() => {
    const loadMedia = async () =>{
      try {
        const data = await fetchUpcomingMovies();
        if(!data?.results?.length){
          throw new Error('No popular movie found')
        }
      
        setMovies(data.results);
        // console.log(data);
    
      } catch (error) {
        console.error(`error fetching data ${error}`);
      }
    }

    loadMedia();
  },[])


  


  // useEffect(() => {
  //   const loadMovieDetails = async () => {
  //     if(movies.length){
  //       const movieId = movies[currentIndex].id;
  //       const response = await fetchMovieDetails(movieId);
  //       setMovieDetails(response);
  //     }
  //   };
  //   loadMovieDetails();
  // }, [currentIndex, movies])

  
  
  // Only render the JSX if movies is not null
  if (!movies.length) {
    return <div className='mt-18 mb-24 bg-amber-500 mx-auto'>Loading...</div>; // Display a loading message or a placeholder
  }

  const heroMedia = movies[currentIndex];

  // Add navigation handlers
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + movies.length) % movies.length);
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % movies.length);  

  // Roundinf the rating to 1 decimal place
  let rating = parseFloat((heroMedia.vote_average).toFixed(1))
  if (heroMedia.runtime && typeof heroMedia.runtime === 'number') {
    const duration = `${Math.floor(heroMedia.runtime/60)}h ${heroMedia.runtime %60}m `
    console.log(duration)
  }else{
    console.log('Runtime not available')
  }

  // genre
  // const mediaGenre = heroMedia.genre;

  const genreNames = movieDetails?.genres?.map(genreId => genreId.name).join(', ');

  return (
    <div className='relative w-full h-[80vh] min-h-[600px] overflow-hidden mx-auto top-0 right-0 left-0'>
        {/* Background image with lazy ladnig */}

        
        <div
          className='absolute inset-0 transition-opacity duration-1000 ease-in-out max-w-screen mx-auto '
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${ heroMedia.backdrop_path }')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            width: '100%'
          }}
        
        />  
        {/* bg  Gradient overlay */}
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-bg-transparent opacity-200"></div>

        

        
         

         {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Previous movie"
      >
        <BiChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Next movie"
      >
        <BiChevronRight className="h-6 w-6" />
      </button>


      {/* Content */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-16">
        <div className="max-w-5xl transition-opacity duration-500">
          <div className="flex flex-wrap gap-2 mb-4">
            {genreNames && (
              <span  className="category-chi text-white">
                {genreNames}
              </span>
            )}
          </div>
          
          <h1 className="text-2xl md:text-5xl font-bold mb-3 text-start text-balance text-white ">
            {heroMedia.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm font-medium text-gray-300 mb-4">
            <span>IMDB</span>
            <span className="text-white bg-red-600 px-1.5 py-1.5 items-center rounded text-xs gap-1  flex">
              <BsStarFill className='text-yellow-500'/>
              {rating}
            </span>
            <span>{heroMedia.release_date.split('-')[0]}</span>
            <span>{}</span>
          </div>
          
          <p className=" text-md md:text-lg text-gray-300 mb-8 w-full">
            {heroMedia.overview}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              className="rounded-full bg-white text-black hover:bg-white/90 transition-all px-8 py-3 font-medium flex items-center"
            >
              <BiPlay className="mr-2 h-5 w-5" />
              Play Now
            </button>
            
            <Link 
              to={`/movie/${heroMedia.id}`}
              className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all px-8 py-3 font-medium"
            >
              More Info
            </Link>
          </div>
        </div>

        </div>
      
      
    </div>
  )
}
