import React, { useState } from 'react';
import loginImage from '../../assets/images/welcome.svg';
import './Auth.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('your@email.com');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    return fetch('http://localhost:3000/login', reqOptions)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log('err', err);
      });
  };

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
            <form onSubmit={handleLogin}>
              <div className="input-field">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required="required"
                  type="text"
                  placeholder="EMAIL"
                />
              </div>

              <div className="input-field">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required="required"
                  type="password"
                  placeholder="PASSWORD"
                />
              </div>

              <button>LOGIN</button>
            </form>
            <small>
              DON'T HAVE AN ACCOUNT?<Link to="/register">Register!</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
