import React, { useState } from 'react';

export function Search({ searchMovies = Function.prototype }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = e => {
    if (e.key === 'Enter' && search) {
      searchMovies(search, type);
    }
  };

  const handleFilter = e => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className='search'>
      <div className='search__container'>
        <input
          className='search__input'
          type='search'
          required
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <label className='search__label'>Search</label>
        <span className='search__line' />

        <button
          className='search__button'
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>

      <div className='search__filter'>
        <label>
          <input
            type='radio'
            name='type'
            className='search__radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          All
        </label>
        <label>
          <input
            type='radio'
            name='type'
            className='search__radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          Movies only
        </label>
        <label>
          <input
            type='radio'
            name='type'
            className='search__radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          Series only
        </label>
      </div>
    </div>
  );
}
