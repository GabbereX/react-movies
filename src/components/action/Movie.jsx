
export function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;


  return (
    <li className='card__item' id={id}>
      <img className='card__image' src={poster === 'N/A' ? `https://via.placeholder.com/300x400?text=${title}` : poster} alt={title} />
      <div className='card__content'>
        <h3 className='card__title'>{title}</h3>
        <p className='card__year'>
          {year}
          <span className='card__type'>{type}</span>
        </p>
      </div>
    </li>
  );
}
