import { API_BASE_URL, API_KEY, API_OPTIONS } from "../constants/ApiCalls"

const fetchFromAPI = async ( endpoint) => {
    try {
        const url = `${API_BASE_URL}${endpoint}?api_key${API_KEY}`;

        const response = await fetch(url, API_OPTIONS)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error("API Fetch Error:", error)
        return null;
    }
};

// search media
export const searchMedia  = async (query, mediaType="movie") =>{
    return await fetchFromAPI(`/search/${mediaType}`, {...API_OPTIONS})
}

// Fetch Popular movies
export const fetchPopularMovies = async () =>{
    return await fetchFromAPI('/movie/popular');
};

// fetch upcoming movies
export const fetchUpcomingMovies = async () => {
    return await fetchFromAPI('/movie/upcoming');
}

// fetch top rated movies

export const fetchTopRatedMovies = async () => {
    return await fetchFromAPI('/movie/top_rated');
}

// fetch popular TV shows

export const fetchPopularShows = async () => {
    return await fetchFromAPI('/tv/popular');
}

// fetch top rated TV shows

export const fetchTopRatedShows = async () => {
    return await fetchFromAPI('/tv/top_rated');
}

// fetch movie details

// export const fetchMovieDetails = async (movieIds) => {
//     try {
//         const moviesWithDetails = await Promise.all(
//             movieIds.map(async (movieId) => {
//                 const response = await fetchFromAPI(`/movie/${movieId}`); 
//                 if (!response.ok) {
//                     throw new Error(movie.status_message || `Failed to fetch movie details for ID: ${movieId}`);
//                 }
                
//                 const movie = await response.json();
                
//                 return {
//                     id: movie.id.toString(),
//                     title: movie.title,
//                     description: movie.overview,
//                     genres: movie.genres.map(genre => genre.name),
//                     duration: `${Math.floor(movie.runtime/60)}h ${movie.runtime %60}m `

//                 }
//             })
//         )
//         return moviesWithDetails;
//     } catch (error) {
//         console.error('Error fetching details', error)
//     }
// }

// fetch TV show details

export const fetchShowDetails = async (showId) => {
    return await fetchFromAPI(`/tv/${showId}`);
}

// fetch similar movies

export const fetchSimilarMovies = async (movieId) => {
    return await fetchFromAPI(`/movie/${movieId}/similar`);
}

// fetch similar TV shows

export const fetchSimilarShows = async (showId) => {
    return await fetchFromAPI(`/tv/${showId}/similar`);
}

// fetch movie recommendations

export const fetchMovieRecommendations = async (movieId) => {
    return await fetchFromAPI(`/movie/${movieId}/recommendations`);
}

// fetch TV show recommendations

export const fetchShowRecommendations = async (showId) => {
    return await fetchFromAPI(`/tv/${showId}/recommendations`);
}

// fetch movie credits

export const fetchMovieCredits = async (movieId) => {
    return await fetchFromAPI(`/movie/${movieId}/credits`);
}

// fetch TV show credits

export const fetchShowCredits = async (showId) => {
    return await fetchFromAPI(`/tv/${showId}/credits`);
}

// fetch movie images

export const fetchMovieImages = async (movieId) => {
    return await fetchFromAPI(`/movie/${movieId}/images`);
}

// fetch TV show images

export const fetchShowImages = async (showId) => {
    return await fetchFromAPI(`/tv/${showId}/images`);
}

// fetch movie reviews

export const fetchMovieReviews = async (movieId) => {
    return await fetchFromAPI(`/movie/${movieId}/reviews`);
}

// fetch TV show reviews

export const fetchShowReviews = async (showId) => {
    return await fetchFromAPI(`/tv/${showId}/reviews`);
}

// fetch trendingMedia tv shows or movis( mediatype = "all" | "movie" | "tv")

export const fetchTrendingMedia = async (mediaType = "all", timeWindow = "week") => {
    return await fetchFromAPI(`/trending/${mediaType}/${timeWindow}`);
}

// fetch discover movies

