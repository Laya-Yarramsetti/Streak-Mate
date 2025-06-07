import './RegisterModal.css';
import { useNavigate } from 'react-router-dom';

export default function RegisterModal() {
  const navigate = useNavigate();

  return (
    <div className="register-modal-overlay">
      <div className="register-popup">
        <div className="register-form">
          <input type="text" placeholder="Enter Username" required />
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Register</button>
        </div>

        <div className="container">
          <button className="cancelbtn" onClick={() => navigate('/login')}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
