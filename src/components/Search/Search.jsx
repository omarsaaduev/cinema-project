import  { useRef, useState } from 'react';
import { getData } from '../../api/getMovies';
import { formatMovieLength } from '../../utils/formatMovieLength';
import './Search.scss'
import Skeleton from '../Skeleton/Skeleton';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const debounceTimeoutRef = useRef(null);

    const handleSearch = (event) => {
        setInputValue(event.target.value);
        
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
          }
          debounceTimeoutRef.current = setTimeout( async() => {
            try {
                const response = await getData(`/search?limit=100&query=${inputValue}`);
                setResults(response.docs);
                
            } catch (error) {
                console.error('Ошибка при поиске:', error);
            }
        },1000)
        

    };

    const filteredResults = results?.filter(item => 
        item?.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
        <div className='search'>
            <div className="container">
            <div className="search__title">Поиск</div>
            <div className="search__input"><input type="text" value={inputValue} onChange={handleSearch} placeholder="Введите название фильма" /></div>
            <div className="movies__wrapper">
          {filteredResults.length> 0? filteredResults?.map((item,index) => (
            
             <div key={index} className="movies__item" >
              <img 
                src={item.poster.url || item.backdrop.url} 
                alt="movies" />
              <h4>{item.name}</h4>
              <p>
                {formatMovieLength(item.movieLength, item.seriesLength)}
                <span>{item.genres[0]?.name}</span>
              </p>
            </div>
            
          )) : inputValue && <Skeleton/>}
        </div>
            </div>
        </div>
    );
};

export default Search;
