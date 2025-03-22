import {fetchPopularMovies} from "../services/mediaServices";
import {useState, useEffect} from "react";

export const HomeContent = ()=>{

    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies  = async() => {
            const data = await fetchPopularMovies();
            
            setMovies(data.results);
            console.log("Popular Movies: ", data);
        };
        loadMovies();
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
            <h2 className="text-center text-2xl">Popular Movies</h2>
            
            <div className="  flex flex-row gap-2 mx-16">
                {movies.map((movie) => {
                    return (
                        
                        <div key ={movie.id} className="flex flex-col   mb-8">
                            <div className="w-[150px]">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}  className=" w-auto object-cover"/>
                                
                            </div>
                                <h2>{movie.title}</h2>

                        </div>     


                    )
                })}
            </div>             
                
        </div>
    )
}