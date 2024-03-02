import { useState } from "react"
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../../firebase/firebase";
import './SignIn.scss';
import { Link } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function login(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            setError('');
            setEmail('');
            setPassword('');
        }).catch(error =>{ 
            console.log(error)
            setError('аккаунт не найден')
        })
    }
   return (
     <div className="signin">
        <div className="signin__wrapper">
        <form >
        <h2>Вход</h2>
        <input
        placeholder="Email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="input"
        />
        <input 
        placeholder="Password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="input"
        />
        {error? <p>{error}</p>: ''}
        <button onClick={login}>войти</button>
        <div className="signin__desc">Еще нет аккаунта?<Link to='/auth/signup'>Регистрация</Link></div>
       </form>
        </div>
     </div>
   )
 }
 
