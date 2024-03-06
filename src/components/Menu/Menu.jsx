import { Link } from "react-router-dom";
import './Menu.scss'
import { useContext } from "react";
import { Context } from "../../context/context";

export default function Menu() {
    const {setOpenMenu} = useContext(Context)
    function closeMenu(){
        setOpenMenu(false)
    }
  return (
        <div className="menu">
            <div className="container">
                <div className="menu__top">
                <Link onClick={closeMenu} to='/' className="menu__logo" >
                <img src="src\assets\images\logo.png" alt="logo" />
                </Link>
                    <div onClick={() => setOpenMenu(false)} className="menu__close">
                        <img src="src\assets\icons\close.svg" alt="close" />
                    </div>
                </div>
                <div className="menu__line"></div>
            <ul className="menu__nav">
                <li  >
                  <Link onClick={closeMenu} to='/'>Главная</Link>
                </li>
                <li  >
                  <Link onClick={closeMenu} to="/movies">Фильмы</Link>
                </li>
                <li  >
                  <Link onClick={closeMenu} to='/about'>О Компании</Link>
                </li>
                <li  ><Link  to="/drawer">Смотреть позже</Link></li>
            </ul>

            </div>
        </div>
           
  )
}
