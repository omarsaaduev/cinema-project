import { useEffect, useState } from 'react';
import './Upcoming.scss'
import { getData } from '../../api/getMovies';
export default function Upcoming() {
  const [upMovies, setUpMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async (limit=4) => {
      const response = await getData(`year=2024&limit=${limit}&page=4`);
      setUpMovies(response.docs)
    }
    fetchMovies()
  },[]);
  return (
    <section className='upcoming'>
        <div className="container">
        <div className="upcoming__title">
        <h3>Upcoming Movies</h3>
        <div className="upcoming__more">See More</div>
      </div>
      <div className="upcoming__wrapper">
        
        {upMovies.map(upMovie => (
          <div key={upMovie.id} className={upMovie.name==upMovies[0].name? "upcoming__item current": "upcoming__item"}>
          <img src={upMovie.poster.previewUrl} alt="upcoming1" />
        </div>
        ))}
        {/* <div className="upcoming__item">
        <img src="src\assets\images\upcoming\upcoming2.png" alt="upcoming2"/>
        </div>
        <div className="upcoming__item">
        <img src="src\assets\images\upcoming\upcoming3.png" alt="upcoming3"/>
        </div>
        <div className="upcoming__item">
        <img src="src\assets\images\upcoming\upcoming4.png" alt="upcoming4"/>
        </div> */}
      </div>
        </div>
    </section>
  )
}
