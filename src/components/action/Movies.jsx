import { Movie } from './Movie';

export function Movies({ movies = [] }) {
  return (
    <div className={'card__list'}>
      {movies.length ? movies.map(movie => (
        <Movie key={movie.imdbID} {...movie} />
      )) : <h4 className='not-found'>Nothing found</h4>}
    </div>
  );
}
