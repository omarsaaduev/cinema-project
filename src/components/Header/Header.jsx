import './Header.scss'
const Header = () => {
  return (
    <header className='header' >
        <div className="container">
            <div className="header__top">
            <div className="header-top__logo">
                <img src="src\assets\images\logo.png" alt="logo" />
            </div>
            <ul className="header__nav">
                <li className='active'><a href="#">Home</a></li>
                <li><a href="#">Distributions</a></li>
                <li><a href="#">Production</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
