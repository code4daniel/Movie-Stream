

  export const API_BASE_URL = 'https://api.themoviedb.org/3';
  export const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQxNzdiZTU2ZmM1N2UxNGZhNDZmNWZiMTJiYjY1MiIsIm5iZiI6MTczODkxODg0Mi4wMzIsInN1YiI6IjY3YTVjYmJhMWY2YjM4MzRmZjJmY2U2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zwy9wZmGMGfk7vekxszfRTkAWeW65nHc-a_BCvgdCfY';
  
  export const API_OPTIONS ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    }
  }

// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}' \