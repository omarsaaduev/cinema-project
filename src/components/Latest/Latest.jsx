import { useEffect, useState } from 'react';
import { formatMovieLength } from '../../utils/formatMovieLength'
import './Latest.scss'
import { getData } from '../../api/getMovies';

export default function Latest() {
  const [movies, setMovies] = useState([]);
  const [limit,setLimit] = useState(8)
  useEffect(() => {
    const fetchMovies = async (limit) => {
      const response = await getData(`year=2023&limit=${limit}`);
      console.log(response)
      setMovies(response.docs)
    }
    fetchMovies(limit)
  },[limit]);

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
          {movies?.map(movie => (
            <div key={movie.id} className="latest__item">
              <img src={movie.poster.url} alt="latest1" />
              <h4>{movie.name}</h4>
              <p>{formatMovieLength(movie.movieLength,movie.seriesLength)}<span>{movie.genres[0].name}</span></p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
