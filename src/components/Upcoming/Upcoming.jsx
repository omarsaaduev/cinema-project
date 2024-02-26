import './Upcoming.scss'
export default function Upcoming() {
  return (
    <section className='upcoming'>
        <div className="container">
        <div className="upcoming__title">
        <h3>Upcoming Movies</h3>
        <div className="upcoming__more">See More</div>
      </div>
      <div className="upcoming__wrapper">
        <div className="upcoming__item current">
            <img src="src\assets\images\upcoming\upcoming1.png" alt="upcoming1" />
        </div>
        <div className="upcoming__item">
        <img src="src\assets\images\upcoming\upcoming2.png" alt="upcoming2"/>
        </div>
        <div className="upcoming__item">
        <img src="src\assets\images\upcoming\upcoming3.png" alt="upcoming3"/>
        </div>
        <div className="upcoming__item">
        <img src="src\assets\images\upcoming\upcoming4.png" alt="upcoming4"/>
        </div>
      </div>
        </div>
    </section>
  )
}
