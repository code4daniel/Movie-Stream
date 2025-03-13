import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { fetchPopularMovies } from '../services/mediaServices';

export const Hero = () => {

  const [heroMedia, setHeroMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const nextSlide = () =>{
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % heroMedia.length);
    }, 300);
  };

  const prevSlide = () => {
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + heroMedia.length) % heroMedia.length);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    },800);
    return () => clearInterval(interval);
  }, [currentIndex])

  // get movie detailed as you switch the slides correspondingly



  useEffect(() => {
    const loadHeroMedia = async () =>{
      try {
        const data = await fetchPopularMovies();
        if(!data?.results?.length){
          throw new Error('No popular movie found')
        }
        
        setHeroMedia(data.results[9]);
        console.log(data);
    
      } catch (error) {
        console.error(`error fetching data ${error}`);
      }
    }

    loadHeroMedia();
  },[])
  
  // Only render the JSX if heroMedia is not null
  if (!heroMedia) {
    return <div>Loading...</div>; // Display a loading message or a placeholder
  }

  return (
    <div className='relative w-full h-[80vh] min-h-[600px] overflow-hidden'>
        {/* Background image with lazy ladnig */}

        
        <div
          className='absolute inset-0 transition-opacity duration-1000 ease-in-out'
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${heroMedia.backdrop_path}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
          }}
        
        />  
        {/* Gradient overlay */}
        
        <div
          className='absolute inset-0 w-full h-full bg-gradient-to-t from-background via-background/60 to-background/20 '
        />


         

         {/* Navigation arrows */}
      <button 
        // onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 backdrop-blur-sm p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Previous movie"
      >
        <BiChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        // onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 backdrop-blur-sm p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Next movie"
      >
        <BiChevronRight className="h-6 w-6" />
      </button>
      
      
    </div>
  )
}
