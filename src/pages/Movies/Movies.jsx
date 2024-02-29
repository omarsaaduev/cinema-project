import { useState } from "react";
import Sorting from "../../components/Sorting/Sorting";

import "./Movies.scss";
import { formatMovieLength } from "../../utils/formatMovieLength";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [limit, setLimit] = useState(40);

  return (
    <section className="movies">
      <div className="container">
        <div className="movies__title">Фильмы</div>
        <p className="movies__description">
          Мы собрали для своих подписчиков коллекцию из тысяч фильмов самых
          разных жанров и направлений
        </p>
        <div className="movies__sorting">
          <div>
            <Sorting setMovies={setMovies} limit={limit} setLimit={setLimit}/>
          </div>
        </div>
        <div className="movies__wrapper">
          {movies.map((item) => (
            <div className="movies__item" key={item}>
              <img 
                src={item.poster.url || item.backdrop.url} 
                alt="movies" />
              <h4>{item.name}</h4>
              <p>
                {formatMovieLength(item.movieLength, item.seriesLength)}
                <span>{item.genres[0].name}</span>
              </p>
            </div>
          ))}
        </div>
        {movies>20 && <div onClick={() => setLimit(prev => prev+40)} className="movies__dop-btn">Посмотреть еще</div>}
        
      </div>
    </section>
  );
}
