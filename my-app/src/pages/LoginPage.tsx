import './LoginPage.css'
import productivityImg from '../images/image copy.png';
import {Link} from 'react-router-dom'; 

export default function LoginPage(){
    return(
        <header className="LoginPage">
            <div className="content">
                <div className="form">
                <h1>Login</h1>
                <h4>Dont have an account? <Link to="/register">Register</Link></h4>
                <input type="email" required placeholder="Email" />
                <input type="password" required placeholder="Password" />
                <button><span>Register</span></button>
                </div>
                <img className="mainImg" src={productivityImg} alt="main visual" />
            </div>
        </header>
    )
    
}