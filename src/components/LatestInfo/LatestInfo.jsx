import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { formatMovieLength } from "../../utils/formatMovieLength";
import { Context } from "../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../redux/movieSlice";
import { getData } from "../../api/getMovies";
import VideoPlayer from "../Player/VideoPlayer";
export default function LatestInfo() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const {latestMovies} = useContext(Context)
  const currentMovie = latestMovies[id - 1];
  const [videoUrl, setVideoUrl] = useState();
  const dispatch = useDispatch();
  const savedMovies = useSelector(state => state.savedMovies);
  const isAdd = savedMovies.some(movie => movie.name === currentMovie?.name)

  const parts = videoUrl?.split('/'); // Разделяем URL по слэшу
  const videoId =  parts && parts[parts.length - 1]; // Берем последнюю часть, которая является id видео


function handleAdd(){
  dispatch(addMovie(currentMovie))
}
function handleRemove(){
  dispatch(removeMovie(currentMovie))
}


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getData(`?id=${currentMovie?.id}&selectFields=videos`);
      setVideoUrl(response?.docs[0]?.videos?.trailers[0]?.url)
    }
    fetchMovies()
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(videoUrl)
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

                    <button className="movie__added" onClick={isAdd? handleRemove : handleAdd}>{isAdd? 'Удалить' : 'Буду смотреть'}</button>
                    
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
        {currentMovie.id ? <div className="container"><VideoPlayer videoId={videoId}/></div> : ''}
    </section>
  );
}
