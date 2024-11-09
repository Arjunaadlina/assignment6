import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from './store/store';
import Header from './components/Header';
import Movie from './components/Movie';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);
  const [query, setQuery] = useState('');

  const fetchMovies = async (query) => {
    dispatch(fetchMoviesRequest());
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=6dee284c&s=${query}`);
      dispatch(fetchMoviesSuccess(response.data.Search || []));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };

  useEffect(() => {
    fetchMovies('Spider-man'); 
  }, []);

  const handleSearch = (query) => {
    if(query == '') return 'Spider-man'
    setQuery(query);
    fetchMovies(query); 
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header title={query ? `Search results for "${query}"` : "Arjuna Search Movie"} onSearch={handleSearch}/>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px]">
        {movies.map((movie, index) => (
          <Movie key={movie.imdbID} movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
