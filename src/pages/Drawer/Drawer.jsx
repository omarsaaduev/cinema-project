import { useDispatch, useSelector } from 'react-redux';
import './Drawer.scss'
import { removeMovie } from '../../redux/movieSlice';
import { formatMovieLength } from '../../utils/formatMovieLength';
import { memo } from 'react';


const DrawerComponent = () => {
  const savedMovies = useSelector(state => state.savedMovies);
  const dispatch = useDispatch();
  function handleRemove(movie){
    dispatch(removeMovie(movie))
  }


  return (
    <div className='drawer'>
        <div className="container">
            <h3>Сохраненные фильмы</h3>
            {savedMovies.length> 0 ? (
                <div className="drawer__wrapper">
                {savedMovies.map(movie => (
                    <div key={movie} className='drawer__item'>
                        <img src={movie.poster.url} alt={movie.name} />
                        <div className="drawer__info">
                             <h4>{movie.name}</h4>
                             <p className='drawer__year-country'><span>{movie.year}, {movie.countries[0].name},</span> <span className='drawer__gener'>{movie.genres[0].name}</span></p>
                             <p className='drawer__rating'>IMDB {movie.rating.imdb } <span>KP {movie.rating.kp}</span></p>
                        <p><span className='drawer__length'>{formatMovieLength(movie.movieLength,movie.seriesLength)}</span>, <span>{movie.ageRating}+</span></p>
                        <button className='drawer__remove' onClick={() => handleRemove(movie)}>удалить</button>
                        </div>
                    </div>
                ))}
            </div>) : (
                <div className="drawer__desc">
                    Привет!👋 Похоже, твоя корзина пуста.😢 Хочешь наполнить ее захватывающими фильмами и сериалами? У нас есть потрясающий выбор блокбастеров, инди-шедевров и эксклюзивных сериалов. Просто начните просматривать нашу библиотеку и добавлять все, что Вам нравится, в корзину. Мы сохраним это для Вас, пока Вы не будете готовы оформить заказ. 🎬🍿Счастливого просмотра! 😊
                </div>
            )}
        </div>
    </div>
  );
};

export const Drawer = memo(DrawerComponent)

