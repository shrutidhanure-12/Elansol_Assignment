import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css'; // We'll create this CSS file

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <div className="sign-in-button" onClick={() => navigate('/register')}>SIGN IN</div>
        <div className="avatar-circle">
          <FontAwesomeIcon icon={faUser} size="2x" color="#42b39d" />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <Form.Control 
              type="text" 
              placeholder="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3 input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <Form.Control 
              type="password" 
              placeholder="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>

          <div className="form-options">
            <Form.Check 
              type="checkbox" 
              label="Remember me" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>

          <Button variant="primary" type="submit" className="login-button">
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;