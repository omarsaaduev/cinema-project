import { onAuthStateChanged, signOut } from "firebase/auth"
import { useContext, useEffect } from "react"
import { auth } from "../../../firebase/firebase";
import SignIn from "../SignIn/SignIn";
import './AuthDetails.scss'
import { Link } from "react-router-dom";
import { Context } from "../../../context/context";

export default function AuthDetails() {
    const {authUser, setAuthUser} = useContext(Context)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null)
            }
        });
        return () => {
            listen();
        }
    }, []);

    function userSignOut(){
        signOut(auth).then(() => console.log('succes'))
    }
  return (
    <div className="auth-details">
      {authUser? (
        <div className="auth-details__success">
            <h3>{authUser.email}</h3>
            <p>{`Приветствуем вас, уважаемый! Рады видеть вас в нашем онлайн кинотеатре, где каждый шаг - это шаг к захватывающим кинематографическим приключениям! Присоединяйтесь к нам и подготовьтесь к захватывающему киноопыту! 🌟`}</p>
            <div className="auth-details__btns">
            <Link to='/' ><button >На главную</button></Link>
            <Link to='/auth'><button onClick={userSignOut}>Выход</button></Link>
            </div>
        </div>
      ): (
        <SignIn/>
      )}
    </div>
  )
}
