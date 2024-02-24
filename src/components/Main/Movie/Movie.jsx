import './Movie.scss'
export default function Movie() {
  return (
    <section className="movie">
        <div className="movie__background">
            <img src="src\assets\images\avatar.png" alt="avatar" />
        </div>
        <div className="movie__wrapper">
            <div className="movie__btn-prev">
                <img src="src\assets\icons\prev.png" alt="prev" />
            </div>
            <div className="movie__info container">
                <div className="movie__text">
                    <div className="movie__category">
                        <div>new</div>
                        <span>Best of 2022</span>
                    </div>
                    <div className="movie__name">Avatar 2</div>
                    <div className="movie__dop-info">
                        <div className="movie__pg">pg-18</div>
                        <div className="movie__duration">3hr 10min</div>
                        <div className="movie__raiting">
                            <img src="src\assets\images\raiting.png" alt="raiting"/>
                            <span>8.5</span>
                        </div>
                        <div className="movie__year">2020</div>
                    </div>
                    <p>The Way of Water is a 2022 American epic science fiction film co-produced and directed by James Cameron, who co-wrote the screenplay with Rick Jaffa</p>
                    <div className="movie__btn">
                        <img src="src\assets\icons\play.svg" alt="play" />
                        <span>Whatch Now</span>
                    </div>
                </div>
                <div className="movie__video">
                    <img src="src\assets\images\video.png" alt="video" />
                </div>
            </div>
            <div className="movie__btn-next">
                <img src="src\assets\icons\next.png" alt="next" />
            </div>
        </div>

    </section>
  )
}
