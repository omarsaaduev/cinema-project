import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import { useContext } from 'react';
import { Context } from '../../context/context';
import Menu from '../Menu/Menu';
const Header = () => {
  const {pathname} = useLocation();
  const {openMenu, setOpenMenu} = useContext(Context)
  
  return (
    <header className='header' >
        <div className="container">
            <div className="header__top">
            <Link to='/' className="header-top__logo" >
                <img src="src\assets\images\logo.png" alt="logo" />
            </Link>
            <ul className="header__nav">
                <li className={pathname==='/'? 'active': ''} >
                  <Link to='/'>Главная</Link>
                </li>
                <li className={pathname==='/movies'? 'active': ''} >
                  <Link to="/movies">Фильмы</Link>
                </li>
                <li className={pathname==='/about'? 'active': ''} >
                  <Link to='/about'>О Компании</Link>
                </li>
                <li className={pathname==='/drawer'? 'active': ''} ><Link to="/drawer">Смотреть позже</Link></li>
            </ul>
            <div className="header__profile">
            <li >
                  <Link to={'/search'}>
                    {pathname==='/search'?
                    <img src="src\assets\icons\search-active.svg" alt="search" />:
                    <img src="src\assets\icons\search.svg" alt="search" />}
                  </Link>
                </li>
                <li>
                  <Link to='/auth'>
                  {pathname==='/auth'? 
                  <img src="src\assets\icons\user-active.svg" alt="user" />:
                  <img src="src\assets\icons\user.svg" alt="user" />
                  }
                  </Link>
                </li>
                <li onClick={() => setOpenMenu(true)} className='header__burger'>
                  <img src="src\assets\icons\burger.svg" alt="burger" />
                </li>
                  {openMenu && <Menu/>}
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header
