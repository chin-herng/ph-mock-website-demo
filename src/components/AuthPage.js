// AuthPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

function AuthPage() {
  const [isRegisterMode, setRegisterMode] = useState(true);

  const switchMode = () => {
    setRegisterMode((prevMode) => !prevMode);
  };

  return (
    <div className="auth-container">
      <h2>{isRegisterMode ? 'Register' : 'Login'}</h2>
      <form>
        {isRegisterMode && (
            <label>
                Email:
                <input type="email" placeholder="Enter your email" />
            </label>
        )}
        <label>
          Username:
          <input type="text" placeholder="Enter your username" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        {isRegisterMode && (
          <label>
            Confirm Password:
            <input type="password" placeholder="Confirm your password" />
          </label>
        )}
        <button type="submit">{isRegisterMode ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegisterMode
          ? 'Already have an account? '
          : "Don't have an account yet? "}
        <Link to="#" onClick={switchMode}>
          {isRegisterMode ? 'Login here' : 'Register here'}
        </Link>
      </p>
    </div>
  );
}

export default AuthPage;
