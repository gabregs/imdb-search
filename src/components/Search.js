import React, { useState } from 'react';
import { json, checkStatus } from '../utils/fetchHelper';
import Suggestions from './Suggestions';

const IMDBSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const changeSearchTerm = (event) => {
    const newSearchTerm = event.target.value;

    setSearchTerm(newSearchTerm);

    if (newSearchTerm === '') {
      return;
    }

    setTimeout(() => {
      return getSuggestions(newSearchTerm);
    }, 300);
  };

  const getSuggestions = (newSearchTerm) => {
    fetch(`https://www.omdbapi.com/?s=${newSearchTerm}&apikey=7468f8b0`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }
        if (data.Response === 'True' && data.Search) {
          const suggestedMovies = data.Search.filter(
            (result) => result.Type === 'movie'
          );
          const suggestedSeries = data.Search.filter(
            (result) => result.Type === 'series'
          );

          const moviesArr = [];
          const seriesArr = [];

          for (let i = 0; i < 3; i++) {
            suggestedMovies[i] !== undefined &&
              moviesArr.push(suggestedMovies[i]);

            suggestedSeries[i] !== undefined &&
              seriesArr.push(suggestedSeries[i]);
          }

          setMovies(moviesArr);
          setSeries(seriesArr);
          setError('');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="search-bar-dropdown">
      <input
        type="search"
        autoComplete="off"
        className="form-control form-control-lg shadow"
        placeholder="Search Movies or TV Series"
        value={searchTerm}
        onChange={changeSearchTerm}
      />

      {(() => {
        if (searchTerm === '') {
          return;
        }

        if (error) {
          return <p className="mt-2 ml-2">{error}</p>;
        }

        return (
          <Suggestions movies={movies} series={series} search={searchTerm} />
        );
      })()}
    </div>
  );
};

export default IMDBSearch;
