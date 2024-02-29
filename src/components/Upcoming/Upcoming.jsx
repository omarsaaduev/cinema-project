import { useContext} from 'react';
import './Upcoming.scss'
import { Slider } from '../Slider/Slider';
import { Context } from '../../context/context';
export default function Upcoming() {
  const {upMovies} = useContext(Context)
  const images = upMovies.map((upMovie) => (
    upMovie.poster.url && upMovie.poster.url
  )).filter(url => url !=null)
  console.log(upMovies)

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
