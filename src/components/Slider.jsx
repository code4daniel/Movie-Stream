import { useState } from 'react'
// import { API_BASE_URL, API_OPTIONS } from './tmdb_url';
// import {fet}

const Slider = () => {

    // TODO: Implement slider component using React hooks or functional components
    // Use useState to manage the current slide index
    // Use useEffect to fetch data for the current slide index
    // Use React's transition group to animate the slide transition
    // Return the slider component with the current slide and controls for navigation

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % 5);
    }
    const prevSlider = () =>{
        setCurrentIndex((  currentIndex - 1 + 5) % 5);
    }

  return (
    <div className='relative w-4/5 mx-auto overflow-hidden'>
        {/* Render the current slide */}
        
      Slider
    </div>
  )
}

export default Slider
