import './LoginPage.css'
import productivityImg from '../images/image copy.png';
import {Link, Outlet, useLocation} from 'react-router-dom'; 

export default function LoginPage() {
    const location = useLocation();
  
    return (
      <header className="LoginPage">
        <div className="content">
          <div className="form">
            <h1>User Login</h1>
            <h3>
              Don’t have an account?{' '}
              <Link to="/login/register" state={{ background: location }}>Register</Link>
            </h3>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* <input type ="checkbox" placeholder="remember me" id="rememberMe" /> 
            <label htmlFor="rememberMe">Remember Me</label> */}
            <div className="form-footer">
                <label className="checkbox">
                    <input type="checkbox" name="remember" />
                    Remember me
                </label>
                <Link to="/forgotpassword" className="forgot-link">
                    Forgot Password?
                </Link>
            </div>

            <button><span>Login</span></button>
          </div>
          <img className="mainImg" src={productivityImg} alt="main" />
        </div>
  
        {/* Outlet renders modal if route matches */}
        <Outlet />
      </header>
    );
  }