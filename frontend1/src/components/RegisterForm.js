import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', { name, email, password, dob });
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="sign-up-button" onClick={() => navigate('/login')}>SIGN UP</div>
        <div className="avatar-circle">
          <FontAwesomeIcon icon={faUser} size="2x" color="#42b39d" />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <Form.Control 
              type="text" 
              placeholder="Full Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3 input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <Form.Control 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3 input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-3 input-group">
            <FontAwesomeIcon icon={faCalendar} className="input-icon" />
            <Form.Control 
              type="date" 
              value={dob} 
              onChange={(e) => setDob(e.target.value)} 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="register-button">
            REGISTER
          </Button>
        </Form>
        <div className="form-text" > <span style={{color:'white'}}> Already have an account? </span>
         <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;