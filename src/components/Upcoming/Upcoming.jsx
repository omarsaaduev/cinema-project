import { useEffect, useState } from 'react';
import './Upcoming.scss'
import { getData } from '../../api/getMovies';
import { Slider } from '../Slider/Slider';
export default function Upcoming() {
  const [upMovies, setUpMovies] = useState([])
  const images = upMovies.map((upMovie) => (
    upMovie.poster.url && upMovie.poster.url
  )).filter(url => url !=null)
  console.log(images)
  useEffect(() => {
    const fetchMovies = async (limit=55) => {
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
          </div>
        </div>
        <Slider images={images}/>
    </section>
  )
}
