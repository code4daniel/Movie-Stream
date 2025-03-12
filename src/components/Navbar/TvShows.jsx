/* eslint-disable react/prop-types */
import {  useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";
import { API_BASE_URL, API_OPTIONS } from "../tmdb_url";
import Search from "../Search";


const TvShows = ({searchTerm}) => {
    const [showList, setShowList] = useState([]);
    const [isLoadng, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // const TMDB_URL = TMDB_URL();

    const fetchShows = async () => {
        setErrorMessage('');
        setIsLoading(true);

        try {
            const endpoint = searchTerm 
                ? `${API_BASE_URL}/search/tv?query=${encodeURIComponent(searchTerm)}`
                :`${API_BASE_URL}/movie/upcoming?language=en-US&page=1`  ;
            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error('Failed to Fetch shows'); 
            }

            const  data = await response.json();
            console.log("the json data is ", data)
            if (data.response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch shows');
                setShowList([]);
                return;
            }

            setShowList(data.results || []);
        } catch (error) {
            console.error(`Error Fetching shows ${error} `);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchShows();
    },[searchTerm])
    

  return (
    <div className="text-white px-8 h-full mt-28 min-h-screen">
        <Search searchTerm={searchTerm} className=""/>
         {isLoadng ? (
            <p className='text-white'>Loading...</p>
          ) : errorMessage ? (
            <p className='text-white'>{errorMessage}</p>
          ) : (
            
          <div className='text-slate-600 space-x-2 space-y-4  px-8 flex flex-row flex-wrap py-8 justify-center'>
            {showList.map((show) => (
              <div className=' space-y-2 w-[180px]  overflow-hidden  rounded-lg' key={show.id} onClick={() =>  navigate(`/show/${show.id}`)}>
                <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt={show.original_title} className="rounded-lg object-fill"/>
                <div className='flex flex-col items-center '>
                <p className='text-[16px] text-center'>{show.name}</p>
                <p className="mb-2 text-md">{show.vote_average} / 10</p>
                <p>{show.release_date}</p>
                </div>
              </div>
          ))}
          </div>
        
          )
          }
      
    </div>
  )
}

export default TvShows
