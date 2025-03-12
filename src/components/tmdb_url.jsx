// import React from 'react'


  // Replace with your own API key here

export const API_BASE_URL = 'https://api.themoviedb.org/4';
export const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQxNzdiZTU2ZmM1N2UxNGZhNDZmNWZiMTJiYjY1MiIsIm5iZiI6MTczODkxODg0Mi4wMzIsInN1YiI6IjY3YTVjYmJhMWY2YjM4MzRmZjJmY2U2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zwy9wZmGMGfk7vekxszfRTkAWeW65nHc-a_BCvgdCfY';

export const API_OPTIONS ={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  }
}



