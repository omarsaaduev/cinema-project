import { useContext } from 'react';
import { formatMovieLength } from '../../utils/formatMovieLength'
import './Latest.scss'
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

export default function Latest() {
  const {setLimit, latestMovies} =useContext(Context)

    const handleMoreClick = () => {
      setLimit(32);
      window.scrollTo({
        top: window.pageYOffset + 600, // Скроллируем на 300 пикселей вниз
        behavior: 'smooth' // Добавляем плавную анимацию скролла
      });
    };
  return (
    <section className='latest'>
      <div className="container">

        <div className="latest__title">
          <h3>Latest Distributions </h3>
      <div onClick={handleMoreClick} className="latest__more">See more</div>
        </div>
        <div className="latest__wrappers">
          {latestMovies?.map((movie, id) => (
            <Link to={`/latest/${id+1}`} key={movie.name}>
            <div className="latest__item">
              <img src={movie.poster.url} alt="latest1" />
              <h4>{movie.name}</h4>
              <p>{formatMovieLength(movie.movieLength,movie.seriesLength)}<span>{movie.genres[0].name}</span></p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
