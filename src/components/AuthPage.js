// AuthPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';
import { useAuth } from './AuthContext';

function AuthPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isRegisterMode, setRegisterMode] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Track error message
  const [successMessage, setSuccessMessage] = useState(''); // Track success message

  const switchMode = () => {
    // Reset state
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    setSuccessMessage('');
    setRegisterMode((prevMode) => !prevMode);
  };

  const convertErrorMessage = (originalMessage) => {
    if (originalMessage.includes("Key: 'Users.Username' Error:Field validation for 'Username' failed on the 'min' tag")) {
      return "Username should have length between 2 - 100.";
    } else if (originalMessage.includes("Key: 'Users.Password' Error:Field validation for 'Password' failed on the 'min' tag")) {
      return "Password should have length at least 6.";
    } else if (originalMessage.includes("this email already exists")) {
      return "This email already exists.";
    } else if (originalMessage.includes("this username already exists")) {
      return "This username already exists.";
    } else if (originalMessage.includes("username or password is incorrect")) {
      return "Username or password is incorrect.";
    }
    
  
    // If no specific conversion is found, return the original message
    return originalMessage;
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // Reset success and error messages
    setSuccessMessage('');
    setErrorMessage('');
  
    // Check if passwords match
    if (isRegisterMode && password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      return; // Do not proceed with form submission
    }
  
    const formData = {
      email,
      username,
      password,
    };
  
    // Replace 'YOUR_BACKEND_URL' with the actual URL of your backend server
    const apiUrl = isRegisterMode ? '/api/users/signup' : '/api/users/login';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Attempt to read the response body, even if the response status is not OK
      const responseBody = await response.text();
  
      if (response.ok) {
        // Successful registration/login logic here
        console.log('Success!');
        setSuccessMessage(
          isRegisterMode
            ? 'Your registration is successful.'
            : 'Login successful. Welcome!'
        );

        // Update the authentication status using the login function from the context
        login();

        // Redirect to home page upon successful registration or login
        navigate('/ph-mock-website-demo');
      } else {
        // Parse the JSON string and extract the message property
        const errorDetails = JSON.parse(responseBody);
        const errorMessage = errorDetails.message || 'An error occurred.';
  
        // Log error details including status, status text, and extracted message
        console.error('Error:', response.status, response.statusText, errorMessage);
  
        // Convert the error message for better user understanding
        const convertedErrorMessage = convertErrorMessage(errorMessage);

        // Set the error message state to display the converted message in the UI
        setErrorMessage(convertedErrorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };  

  return (
    <div className="auth-container">
      <h2>{isRegisterMode ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        {isRegisterMode && (
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        )}
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {isRegisterMode && (
          <label>
            Confirm Password:
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        )}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
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
