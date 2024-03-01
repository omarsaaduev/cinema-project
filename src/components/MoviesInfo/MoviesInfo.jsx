import { useParams } from "react-router-dom";
import "./MoviesInfo.scss";
import { useEffect, useState } from "react";
import { getData } from "../../api/getMovies";
import { formatMovieLength } from "../../utils/formatMovieLength";
export default function MoviesInfo() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const currentMovie = movies[id - 1];

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getData("?rating.imdb=7-10&limit=30");
      setMovies(response.docs);
    };
    fetchMovies();
  }, []);
  return (
    currentMovie &&
    <section className="movies-info">
      <img
        className="movies-info__background"
        src={currentMovie.backdrop.url}
        alt=""
      />
      <div className="container movies-info__wrapper">
        <div className="movie__text">
                    <div className="movie__name">{currentMovie.name}</div>
                    <div className="movie__dop-info">
                        <div className="movie__pg">pg-{currentMovie.ageRating}</div>
                        <div className="movie__duration">{formatMovieLength(currentMovie.movieLength)}</div>
                        <div className="movie__raiting">
                            <img src="src\assets\images\raiting.png" alt="raiting"/>
                            <span>{currentMovie.rating.imdb}</span>
                        </div>
                        <div className="movie__year">{currentMovie.year}</div>
                    </div>
                    <div className="movies-info__genres">
                      {currentMovie.genres.map(gener => (
                        <span key={gener.name}>{gener.name}</span>
                      ))}
                    </div>
                    <p>{currentMovie.description}</p>
                    
        </div>
        <div className="movies-info__distributions">
          <h4>Distributions Countries</h4>
          <p>Trusted by the world’s leading Theatres</p>
          <div className="movies-info__countries">
            <img src="src\assets\images\countries\GB.svg" alt="GB" />
            <img src="src\assets\images\countries\GM.svg" alt="GM" />
            <img src="src\assets\images\countries\GN.svg" alt="GN" />
            <img src="src\assets\images\countries\GP.svg" alt="GP" />
            <img src="src\assets\images\countries\GQ.svg" alt="GQ" />
            <img src="src\assets\images\countries\HM.svg" alt="HM" />
          </div>
        </div>
      </div>
    </section>
  );
}
