import { useContext, useState } from "react";
import Sorting from "../../components/Sorting/Sorting";

import "./Movies.scss";
import { formatMovieLength } from "../../utils/formatMovieLength";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";
export default function Movies() {
  // const [movies, setMovies] = useState([]);
  const {allMovies, setAllMovies} = useContext(Context);
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
            <Sorting setAllMovies={setAllMovies} limit={limit} setLimit={setLimit}/>
          </div>
        </div>
        <div className="movies__wrapper">
          {allMovies.map((item,index) => (
            <Link to={`/allmovies/${index +1 }`} key={item}>
             <div className="movies__item" >
              <img 
                src={item.poster.url || item.backdrop.url} 
                alt="movies" />
              <h4>{item.name}</h4>
              <p>
                {formatMovieLength(item.movieLength, item.seriesLength)}
                <span>{item.genres[0].name}</span>
              </p>
            </div>
            </Link>
          ))}
        </div>
        {allMovies.length > 0? <div onClick={() => setLimit(prev => prev+40)} className="movies__dop-btn">Показать еще...</div> :
        <div className="movies__dop-btn">Фильмов не найдено...</div>}
        
      </div>
    </section>
  );
}
