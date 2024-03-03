import { Link } from 'react-router-dom'
import './Header.scss'
import { useContext } from 'react'
import { Context } from '../../context/context'
const Header = () => {
  const {activeLink, setAktiveLink} = useContext(Context)
  
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
            <div className="header__profile">
            <li onClick={() => setAktiveLink('search')}>
                  <Link to={'/search'}>
                    {activeLink==='search'?
                    <img src="src\assets\icons\search-active.svg" alt="search" />:
                    <img src="src\assets\icons\search.svg" alt="search" />}
                  </Link>
                </li>
                <li onClick={() => setAktiveLink('user')}>
                  <Link to='/auth'>
                  {activeLink==='user'? 
                  <img src="src\assets\icons\user-active.svg" alt="user" />:
                  <img src="src\assets\icons\user.svg" alt="user" />
                  }
                  </Link>
                </li>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header
