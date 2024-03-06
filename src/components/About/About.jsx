import './About.scss'
export default function About() {
  return (
    <section className='about'>
        <div className="container">
        <h3 className="about__title">About Us</h3>
      <div className="about__info">
        <div className="about__text">
            <h4 className="about__text-title">The most professionall  company</h4>
            <p>Quis aliqua sunt nisi consectetur anim ullamco ea. Ut deserunt non voluptate nisiQuis aliqua sunt nisi</p>
            <br />
            <p>Quis aliqua sunt nisi consectetur anim ullamco ea. Ut deserunt non voluptate nisi sit elit exercitation eu Lorem. Mollit occaecat nisi occaecat fugiat ullamco. Pariatur excepteur qui dolore. Quis aliqua sunt nisi consectetur anim ullamco ea. Quis aliqua sunt nisi consectetur anim ullamco eaollit occaecat nisi occaecat fugiat ullamco.</p>
            {/* <button>Read more</button> */}
        </div>
        <div className="about__image">
            <img src="src\assets\images\about-img.png" alt="about-img" />
        </div>
      </div>
        </div>
    </section>
  )
}
