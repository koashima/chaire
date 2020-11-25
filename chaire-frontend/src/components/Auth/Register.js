import React from 'react';
import loginImage from '../../assets/images/register.svg';
import './Auth.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="card-shadow">
          <div className="image-section">
            <h2>HELLO or CHAIRE!</h2>
            <img src={loginImage} alt="login" />
          </div>

          <div className="form-section">
            <h2>REGISTER</h2>
            <form action="">
              <div className="input-field">
                <input placeholder="FIRST NAME" />
              </div>
              <div className="input-field">
                <input placeholder="LAST NAME" />
              </div>
              <div className="input-field">
                <select>
                  <option value="female">FEMALE</option>
                  <option value="male">MALE</option>
                </select>

              </div>
              <div className="input-field">
                <input placeholder="EMAIL" />
              </div>

              <div className="input-field">
                <input placeholder="PASSWORD" />
              </div>

              <button>SUBMIT</button>
            </form>

            <small>ALREADY HAVE AN ACCOUNT? <Link to='/login'>LOGIN!</Link></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;