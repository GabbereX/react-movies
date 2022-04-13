import React, { useEffect, useState } from 'react';
import { Movies } from '../action/Movies';
import { Preload } from '../action/Preload';
import { Search } from '../action/Search';

import {API_KEY} from "../../../config";

export function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (value, type = 'all') => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className='main'>
      <div className='container main__container'>
        <Search searchMovies={searchMovies} />
        {loading ? <Preload /> : <Movies movies={movies} />}
      </div>
    </main>
  );
}
