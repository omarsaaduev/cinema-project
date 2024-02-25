import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__popcorn">
            <img src="src\assets\images\popcorn2.png" alt="popcorn" />
        </div>
        <div className="footer__top">
          <div className="footer__about">
            <div className="footer__about-text">
              <h4 className="footer__title">About us</h4>
              <p>
                Atiframe is one of the best website builders that let you made a
                stunning website without coding knowledge. 20 design versions
                available to install in 1 click!
              </p>
              <div className="footer__socials">
                <img
                  src="src\assets\icons\socials\facebook.svg"
                  alt="facebook"
                />
                <img src="src\assets\icons\socials\linkedin.svg" alt="insta" />
                <img src="src\assets\icons\socials\twitter.svg" alt="twitter" />
              </div>
            </div>
            
            <img className="footer__map" src="src\assets\images\map.png" alt="map" />
            
          </div>
          <div className="footer__info">
            <div className="footer__company">
              <h4 className="footer__title">Company</h4>
              <ul>
                <li><a href="">What We Do</a></li>
                <li><a href="">Our Core Values</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Recent News</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer__useful">
              <h4 className="footer__title">Useful</h4>
              <ul>
                <li><a href="">Support</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Live chat</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of use</a></li>
                <li><a href="">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom"></div>
    </footer>
  );
}
