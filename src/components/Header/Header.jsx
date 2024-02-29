import { Link } from 'react-router-dom'
import './Header.scss'
import { useState } from 'react'
const Header = () => {
  const [activeLink, setAktiveLink] = useState('home');
  
  return (
    <header className='header' >
        <div className="container">
            <div className="header__top">
            <Link to='/' className="header-top__logo" onClick={() => setAktiveLink('home')}>
                <img src="src\assets\images\logo.png" alt="logo" />
            </Link>
            <ul className="header__nav">
                <li className={activeLink==='home'? 'active': ''} onClick={() => setAktiveLink('home')}>
                  <Link to='/'>Home</Link>
                </li>
                <li className={activeLink==='movies'? 'active': ''} onClick={() => setAktiveLink('movies')}>
                  <Link to="/movies">Movies</Link>
                </li>
                <li><a href="#">Production</a></li>
                <li className={activeLink==='about'? 'active': ''} onClick={() => setAktiveLink('about')}>
                  <Link to='/about'>About Us</Link>
                </li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
