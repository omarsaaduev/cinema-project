import { useEffect, useState } from 'react';
import './Movie.scss'
import { getData } from '../../api/getMovies';
import { formatMovieLength } from '../../utils/formatMovieLength';
import { Link } from 'react-router-dom';

export default function Movie() {
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);
    const currentMovie = movies[index];
    

    useEffect(() => {
        const fetchMovies = async () => {
          const response = await getData('?rating.imdb=7-10&limit=30');
          setMovies(response.docs)
        }
        fetchMovies()
      },[]);

      const nextMovie = () => 
      {
        if(index>=29){
            setIndex(index);
        }else{
            setIndex(index + 1);
        }
      }

      const prevMovie = () => {
        if(index<=0)
        setIndex(index);
        else{ setIndex(index-1)}
      }

    
  return (
    currentMovie && 
    <section style={{backgroundImage: `url(${currentMovie.backdrop.url})`}} className="movie">
        <div className="movie__wrapper">
            <div onClick={prevMovie} className="movie__btn-prev">
                <img src="src\assets\icons\prev.png" alt="prev" />
            </div>
            <div className="movie__info container">
                <div className="movie__text">
                    <div className="movie__category">
                        <div>new</div>
                        <span>{currentMovie.top250? `#${currentMovie.top250} in the 250`: 'top 250'}</span>
                    </div>
                    <div className="movie__name"></div>
                    <div className="movie__dop-info">
                        <div className="movie__pg">pg-{currentMovie.ageRating}</div>
                        <div className="movie__duration">{formatMovieLength(currentMovie.movieLength)}</div>
                        <div className="movie__raiting">
                            <img src="src\assets\images\raiting.png" alt="raiting"/>
                            <span>{currentMovie.rating.imdb}</span>
                        </div>
                        <div className="movie__year">{currentMovie.year}</div>
                    </div>
                    <p>{currentMovie.description}</p>
                    <Link to={`/movies/${index+1}`}>
                        <div className="movie__btn">
                            <img src="src\assets\icons\play.svg" alt="play" />
                            <span>Whatch Now</span>
                        </div>
                    </Link>
                </div>
                <div className="movie__video">
                <img src={currentMovie.logo.url} alt="" />
                </div>
            </div>
            <div onClick={nextMovie} className="movie__btn-next">
                <img src="src\assets\icons\next.png" alt="next" />
            </div>
        </div>

    </section>
  )
}
