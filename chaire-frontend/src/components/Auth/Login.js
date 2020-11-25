import React from 'react';
import loginImage from '../../assets/images/welcome.svg';
import './Auth.scss';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="card-shadow">
          <div className="image-section">
            <h2>HELLO or CHAIRE!</h2>
            <img src={loginImage} alt="login" />
          </div>

          <div className="form-section">
            <h2>LOGIN</h2>
            <form action="">
              <div className="input-field">
                <input placeholder="EMAIL" />
              </div>

              <div className="input-field">
                <input placeholder="PASSWORD" />
              </div>

              <button>LOGIN</button>
            </form>
            <small>DON'T HAVE AN ACCOUNT? REGISTER!</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
