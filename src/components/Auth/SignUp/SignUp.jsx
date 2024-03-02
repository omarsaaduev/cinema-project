import { useState } from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../../firebase/firebase";
import './SignUp.scss';
import { Link } from "react-router-dom";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    const [error, setError] = useState('');
    const [isForm, setIsForm] = useState(true);

    function register(e){
        e.preventDefault()
        if(!email || !password || !copyPassword || !username){
            setError('Есть незаполненные поля')
            return
        }
        if(password !== copyPassword){
            setError('Пароли не совпадают')
            return
        }
        else if(password.length<6){
            setError('Минимальная длина пароля 6 символов')
            return
        }
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            setError('');
            setUsername('');
            setEmail('');
            setCopyPassword("");
            setPassword('');
            setIsForm(false)
        }).catch((error) => console.log(error))
        
    }
   return (
     <div className="signup">
        {isForm ? (
            <div className="signup__wrapper">
                <form onSubmit={register}>
            <h2>Регистрация</h2>
            <input
            placeholder="Username"
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="input"
            />
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
            <input 
            placeholder="Confirm Password"
                type="password" 
                value={copyPassword} 
                onChange={(e) => setCopyPassword(e.target.value)}
                className="input"
            />
            {error? <p className="signup__error">{error}</p>: ''}
            <button>Создать</button>
           </form>
            </div>
             
        ) : <div className="signup__success">
            <img src="src\assets\images\success.png" alt="succes" />
            <div>Регистрация прошла успешно.</div>
            <p>Теперь вам доступна коллекция из тысячи фильмов и сериалов </p>
            <Link to='/'>На главную</Link>
            </div>}
        
     </div>
   )
 }
 
