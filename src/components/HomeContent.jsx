import {fetchPopularMovies, fetchPopularShows, fetchUpcomingMovies } from "../services/mediaServices";
import {useState, useEffect} from "react";

export const HomeContent = ()=>{

    
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const loadPopularMovies  = async() => {
            const data = await fetchPopularMovies();
            
            setPopularMovies(data.results);
            // console.log("Popular Movies: ", data);
        };
        loadPopularMovies();
    }, []);


    // upcoming coming states
    useEffect(() => {
        const loadUpcomingMovies  = async() => {
            const data = await fetchUpcomingMovies();
            
            setUpcomingMovies(data.results);
            // console.log("Popular Movies: ", data);
        };
        loadUpcomingMovies();
    }, []);
    

    useEffect(() => {
        const loadShows  = async() => {
            const data = await fetchPopularShows();
            
            setShows(data.results);
            console.log("Popular Tv Shows: ", data);
        };
        loadShows();
    }, []);

    // useEffect(() => {
    //     const loadMedia = async () =>{
    //       try {
    //         const data = await fetchPopularMovies();
    //         if(!data?.results?.length){
    //           throw new Error('No popular movie found')
    //         }
            
    //         setMovies(data.results);
    //         // console.log(data);
        
    //       } catch (error) {
    //         console.error(`error fetching data ${error}`);
    //       }
    //     }
    
    //     loadMedia();
    //   },[])

    return(
        <div className=" flex flex-col space-y-4 mt-8 text-white">

             {/* new Movies */}
             <h2 className="text-center text-2xl">Upcoming Movies</h2>
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

            {/* new Movies */}
            <h2 className="text-center text-2xl">Popular Movies</h2>
            <div className="  flex flex-row gap-4 mx-16">
                {upcomingMovies.map((movie) => {
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
            
            {/* popular Tv Shows */}
            <h2 className="text-center text-2xl">Popular Tv Shows</h2>
            <div className="  flex flex-row gap-2 mx-16">
                {shows.map((show) => {
                    return (   
                        <div key ={show.id} className="flex flex-col items-center rounded-md mb-8">
                            <div className="w-[150px]">
                                <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt={show.title}  className=" w-auto object-cover"/>
                            </div>
                            <span>{}</span>
                            <h2>{show.title}</h2>
                        </div>     
                    )
                })}
            </div>   
                      
                
        </div>
    )
}