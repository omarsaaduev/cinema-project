import { memo, useContext} from 'react';
import './Upcoming.scss'
import { Slider } from '../Slider/Slider';
import { Context } from '../../context/context';
function UpcomingComponent() {
  const {upMovies} = useContext(Context)
  const images = upMovies.map((upMovie) => (
    upMovie.poster.url && upMovie.poster.url
  )).filter(url => url !=null)

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

export const Upcoming = memo(UpcomingComponent)
