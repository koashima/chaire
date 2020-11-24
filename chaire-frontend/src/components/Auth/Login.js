import React from 'react';
import loginImage from '../../assets/images/welcome.svg';

const Login = () => {
  return (
    <div class="auth-container">
      <div class="auth-card">
        <div>
          <div class="image-section">
            <h2>HELLO OR CHAIRE!</h2>
            <img src={loginImage} alt="login" style={{ width: 300 }} />
          </div>

          <div class="form-section">
            <h2>LOGIN</h2>
            <form action="">
              <div class="input-field">
                <input placeholder="EMAIL" />
              </div>
              <div class="input-field">
                <input placeholder="PASSWORD" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
