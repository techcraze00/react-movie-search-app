import React, {useState, useEffect} from 'react'
import Search from './components/Search'
import Spinners from './components/Spinners';
import MovieCard from './components/MovieCard';
import {useDebounce} from 'react-use';
import { updateSearchCount } from './appwrite';
// const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_URL = 'https://vite-react-template.jprayasb2003.workers.dev/api';

// const BASE_URL = 'https://www.omdbapi.com';
/*
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};
*/
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [deBounceSearchTerm, setDeBounceSearchTerm] = useState('');
  /*
  const fetchMovies = async() => {
    try{
      const endpoint = `${BASE_URL}/movie?sort_by=popularity.desc`;
      // const endpoint = `${BASE_URL}/?apikey=${API_KEY}&s=Batman`;
    
      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json
      console.log(data)

    } catch(error) {
      console.error(`Error fetching the movies: ${error}`);
      setErrorMsg('Error fetching movies. Please try again later.');
    }
  }
*/
  useDebounce( () => setDeBounceSearchTerm(searchTerm), 500, [searchTerm] )

  const fetchMovies = async (query='') => {
    setisLoading(true);
    setErrorMsg('');

    try {
      const endpoint =  query 
                        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                        : `${BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      console.log(data)
      console.log(data.results)
      
      
      if(data.Response === 'False'){ 
        setErrorMsg(data.Error || "Failed to fetch movie");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || [])

      updateSearchCount();
   } catch (error) {
      console.error(`Error fetching the movies: ${error}`);
      setErrorMsg('Error fetching movies. Please try again later.');
    } finally {
      setisLoading(false)
    }
  };

  useEffect( () => {
    fetchMovies(deBounceSearchTerm);
  }, [deBounceSearchTerm]);

  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="hero background" />
          <h1>Find <span className='text-gradient'> Movies </span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={ searchTerm } setSearchTerm={setSearchTerm} />
        </header>

        <section className='all-movies'>
          <h2 className='mt-[40px]'>All Movies</h2>
          {
            isLoading ? (<Spinners/>)
            : errorMsg ? ( <p className='text-red-500'>{ errorMsg }</p> ) :
            (
              <ul >
                 {movieList.map( (movies) => ( 
                  <MovieCard key={movies.id} movies={movies} />
                  ) ) }
              </ul>
            )
          }
        </section>
      </div>
    </main>
  )
}

export default App