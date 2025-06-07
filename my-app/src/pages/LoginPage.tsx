import './LoginPage.css'
import productivityImg from '../images/image copy.png';
import {Link, Outlet, useLocation} from 'react-router-dom'; 

export default function LoginPage() {
    const location = useLocation();
  
    return (
      <header className="LoginPage">
        <div className="content">
          <div className="form">
            <h1>Login</h1>
            <h4>
              Don’t have an account?{' '}
              <Link to="/login/register" state={{ background: location }}>Register</Link>
            </h4>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button><span>Login</span></button>
          </div>
          <img className="mainImg" src={productivityImg} alt="main" />
        </div>
  
        {/* Outlet renders modal if route matches */}
        <Outlet />
      </header>
    );
  }