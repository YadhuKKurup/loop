import { useState } from 'react';
import backgroundGIF from '../../Images/image3.gif';
import { Regex } from '../../Constants/Regex/Regex';
import './../../Stylesheets/Login.css';
import { Post } from '../../Services/Services';
import {  useNavigate } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';
const LoginScreen = ({ onFormSwitch }: any) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });


  const handleEmailChange = (e: any) => {
    const { value } = e.target;
    setEmail(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      email: ''
    }));
  };

  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    setPassword(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      password: ''
    }));
  };

  const handleSubmit =async (e: any) => {
    e.preventDefault();


    // Basic validation
    if (!email.trim() || !Regex.EMAIL.test(email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please enter a valid email'
      }));
      return;
    }


    if (!password.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Please enter your password'
      }));
      return;
    }


    // Proceed with login if validation passes
    console.log('Form Submitted:', { email, password });
   

    
      await Post("login", { email, password })


    navigate('/CustomerDashboard');

  };




  return (
    <div className='App-div mt-2 p-2' style={{ height: 650, width: '100%', margin: 'auto', maxWidth: '100%' }}>
      <div className='m-2 d-flex p-3' style={{ marginTop: '2%', height: '100%', width: '100%' }}>
        <div className=' col-7 d-flex' style={{ backgroundImage: `url(${backgroundGIF})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        <div className='col-5 d-flex'>
          <form className='m-auto'  action="#" onSubmit={handleSubmit} style={{width:'60%'}}>
            <div className="field">
              <input value={email} onChange={handleEmailChange} type="text" required style={{ width: '100%' }} />
              {errors.email && <i className="fas fa-exclamation-circle error-icon" title={errors.email}></i>}
              <span className="fas fa-user" style={{ textAlign: 'center' }}></span>
              <label>Email</label>
            </div>
            <div className="field">
              <input value={password} onChange={handlePasswordChange} type="password" required style={{ width: '100%' }} autoComplete='new-password' />
              {errors.password && <i className="fas fa-exclamation-circle error-icon" title={errors.password}></i>}
              <span className="fas fa-lock" style={{ textAlign: 'center' }}></span>
              <label>Password</label>
            </div>
            <div className="forgot-pass" style={{ textAlign: 'center' }}>
              <a href="#">Forgot Password?</a>
            </div>
            <button>Sign in</button>
            <div onClick={() => onFormSwitch('register')} className="sign-up">
              Not a member?
              <a className='mx-1' href="#">signup now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
