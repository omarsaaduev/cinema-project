import { memo, useCallback, useEffect, useState } from 'react';
import './Sorting.scss'
import { getData } from '../../api/getMovies';


const SortingComponent = ({setAllMovies, limit, setLimit, allMovies}) => {
  const [selectedRaiting, setSelectedRaiting] = useState('');
  const [selectedGener, setSelectedGener] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {

    const fetchMovies = async () => {
      const response = await getData(`?limit=${limit}&${selectedRaiting}&${selectedGener}&${selectedCountry}&${selectedYear}`)
      setAllMovies(response.docs)
    }
    fetchMovies()
  },[selectedRaiting, selectedGener, selectedCountry, selectedYear,limit]);


  const handleRaitingChange = useCallback((event) => {
    setSelectedRaiting(event.target.value);
  }, [setSelectedRaiting]);

  const handleGenerChange = useCallback((event) => {
    setSelectedGener(event.target.value);
  }, [setSelectedGener]);

  const handleCountryChange = useCallback((event) => {
    setSelectedCountry(event.target.value);
  }, [setSelectedCountry]);

  const handleYearChange = useCallback((event) => {
    setSelectedYear(event.target.value);
  }, [setSelectedYear]);


  return (
    <div className='sorting__wrapper'>
      <select   value={selectedGener} onChange={handleGenerChange}>
        <option value="">Жанры</option>
        <option value="genres.name=боевик">Боевик</option>
        <option value="genres.name=детектив">Детектив</option>
        <option value="genres.name=детский">Детский</option>
        <option value="genres.name=аниме">Аниме</option>
        <option value="genres.name=драма">Драма</option>
        <option value="genres.name=комедия">Комедия</option>
        <option value="genres.name=биография">Биография</option>
        <option value="genres.name=криминал">Криминал</option>
        <option value="genres.name=триллер">Триллер</option>
        <option value="genres.name=семейный">Семейный</option>
      </select>
      <select value={selectedRaiting} onChange={handleRaitingChange}>
        <option value="">Рейтинг</option>
        <option value="rating.imdb=5-7">От 5</option>
        <option value="rating.imdb=6-8">От 6</option>
        <option value="rating.imdb=7-9">От 7</option>
        <option value="rating.imdb=8-10">От 8</option>
      </select>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Годы выхода</option>
        <option value="year=2023-2024">2023-2024</option>
        <option value="year=2020-2022">2020-2022</option>
        <option value="year=2010-2019">2010-2019</option>
        <option value="year=2000-2009">2000-2009</option>
        <option value="year=1990-1999">1990-1999</option>
      </select>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Страны</option>
        <option value="countries.name=США">США</option>
        <option value="countries.name=Россия">Россия</option>
        <option value="countries.name=Франция">Франция</option>
        <option value="countries.name=Бельгия">Бельгия</option>
        <option value="countries.name=Германия">Германия</option>
        <option value="countries.name=Индия">Индия</option>
      </select>
      
    </div>
  );
};

export const Sorting = memo(SortingComponent)



