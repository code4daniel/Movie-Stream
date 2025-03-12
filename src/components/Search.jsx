/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react"


const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='search flex space-x-4 items-center w-full bg-light-100/5 px-4 py-3 rounded-lg mt-10 max-w-3xl mx-auto'>
      
        <img src="search.svg" alt="Search" className=" left-2 h-5 w-5 " />
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search fthrough thousands of movies'
          className="w-full text-gray-500  placeholder-light-200 outline-hidden py-2 px-2"
        />
        
      
    </div>
  )
}

export default Search
