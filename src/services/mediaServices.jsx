import { API_BASE_URL, API_KEY, API_OPTIONS } from "../constants/ApiCalls"

export const fetchFromAPI = async ( endpoint) => {
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





export const getMovieByCategory = async (category) =>{
    
    let url = "";
    switch(category){
        case "trending":
            url = "/trending/movie/day";
            break;
        case "popular":
            url = "/movie/popular";
            break;
        case "top_rated":
            url = "/movie/top_rated";
            break;
        case "upcoming":
            url = "/movie/upcoming";
            break;
        case "popular_shows":
            url = "/tv/popular";
            break;
        case "top_rated_shows":
            url = "/tv/top_rated";
            break;
        case "animation":
            url = "/discover/movie?with_genres=16";
            break;
        case "kids":
            url = "/discover/movie?with_genres=1076";
            break;
        case "horror":
            url = "/discover/movie?with_genres=27";
            break;
        case "romance":
            url = "/discover/movie?with_genres=10749";
            break;
        case "science_fiction":
            url = "/discover/movie?with_genres=878";
            break;
        case "documentary":
            url = "/discover/movie?with_genres=99";
            break;
        case "adventure":
            url = "/discover/movie?with_genres=12";
            break;
        default:
            url = "/trending/movie/day";
    }
    
       return await fetchFromAPI(`${url}`);
}

// search media
export const searchMedia  = async (query, mediaType="movie") =>{
    return await fetchFromAPI(`/search/${mediaType}`, {...API_OPTIONS})
}

// Fetch Popular movies
export const fetchPopularMovies = async () =>{
    return await fetchFromAPI('/movie/popular?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}');
};



// Fetch Popular movies
export const fetchNowPlayingMovies = async () =>{
    return await fetchFromAPI('/movie/now_playing?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}');
};

// fetch upcoming movies
export const fetchUpcomingMovies = async () => {
        //get todays date
        const today = new Date().toISOString().split("T")[0]; // format YYYY-MM-DD
        // fetch data from api
        return  await fetchFromAPI(`/movie/upcoming?language=en-US&page=1&release_date.gte=${today}&sort_by=release-date.asc`);   
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


export const fetchAnimationMovies = async () => {
    return await fetchFromAPI('/discover/movie?language=en-US&with_genres=16');
}

// fetch movie details

export const fetchMovieDetails = async (movieId) => {
    return await fetchFromAPI(`/movie/${movieId}`);
}

// fetch runtime

export const fetchMovieRuntime = async (movieId) => {
    return await fetchFromAPI(`/movie/${movieId}/runtime`);
}

// fetch similar movies



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

// fetch kid's movies and tv shows

// animation



