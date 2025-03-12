/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "./tmdb_url";

const SimilarMoviesList = ({ movieId }) => {
    const [similarMovies, setSimilarMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const fetchSimilarMovies = async () => {
        setErrorMessage("");
        setIsLoading(true);

        try {
            if (!movieId) {
                throw new Error("No movie ID provided");
            }

            const endpoint = `${API_BASE_URL}/movie/${movieId}/similar`;
            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error("Failed to fetch similar movies");
            }

            const data = await response.json();
            setSimilarMovies(data.results || []);
        } catch (error) {
            setErrorMessage(error.message);
            setSimilarMovies([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSimilarMovies();
    }, [movieId]);

    return (
        <div className="text-white px-8 h-full mt-16">
            {isLoading ? (
                <p className='text-white'>Loading...</p>
            ) : errorMessage ? (
                <p className='text-white'>{errorMessage}</p>
            ) : (
                <div className='text-slate-600 space-x-2 space-y-4 px-8 flex flex-row flex-wrap py-8 justify-center'>
                    {similarMovies.map((movie) => (
                        <div 
                            className='space-y-2 w-[180px] overflow-hidden rounded-lg cursor-pointer' 
                            key={movie.id} 
                            onClick={() => navigate(`/movie/${movie.id}`)}
                        >
                            <img 
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                alt={movie.original_title} 
                                className="rounded-lg object-fill"
                            />
                            <div className='flex flex-col items-center'>
                                <p className='text-[16px] text-center'>{movie.original_title}</p>
                                <p className="mb-2 text-md">{movie.vote_average} / 10</p>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SimilarMoviesList;
