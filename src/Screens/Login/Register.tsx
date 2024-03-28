import { useState } from 'react';
import backgroundGIF from '../../Images/game.png';
// import backgroundGIFF from '../../Images/game1.png';
import { Regex } from '../../Constants/Regex/Regex';
import './../../Stylesheets/Login.css';
import { useForm } from "react-hook-form"
import { Post } from '../../Services/Services';

const Register = ({ onFormSwitch }: any) => {
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('');
  const {register,handleSubmit} = useForm();
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  });

  const handleEmailChange = (e: any) => {
    const { value } = e.target;
    setEmail(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      email: Regex.EMAIL.test(value) ? '' : 'Please Enter a Valid Email'
    }));
  };

  const handlePasswordChange = (e: any) => {
    const { value } = e.target;
    setPassword(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      password: Regex.PASSWORD_PATTERN.test(value) ? '' : 'Please Enter a valid Password'
    }));
  };

  const handleUsernameChange = (e: any) => {
    const { value } = e.target;
    setUsername(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      username: value.trim() ? '' : 'Please Enter Your Full Name'
    }));
  };

  const handleConfirmPasswordChange = (e: any) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setErrors(prevErrors => ({
      ...prevErrors,
      confirmPassword: value === password ? '' : 'Passwords do not match'
    }));
  };

  const onSubmitHandler = async (data: any) => {
    // Check if there are any errors
    if (Object.values(errors).some(error => error)) {
      return;
    }
  debugger
    await Post("register",data)

    setEmail('');
    setPassword('');
    setUsername('');
    setConfirmPassword('');

    setErrors({
      email: '',
      password: '',
      username: '',
      confirmPassword: ''
    });
    
    alert("Successfully Registered")
  };



  return (
    <div className="d-flex" style={{ margin: '2%', padding: '4%', alignItems: 'center', justifyContent: 'space-between',}}>
      <div className="col-7" style={{ height: '500px', backgroundImage: `url(${backgroundGIF})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <form className='mx-5' style={{width:'28%' }}  onSubmit={handleSubmit(onSubmitHandler)} >
        <div className="field">
          <input value={username} type="text" required {...register("fullname",{
            onChange:(e)=>{
              handleUsernameChange(e)
            }
          })}/>
          {errors.username && <i className="fas fa-exclamation-circle error-icon  " title={errors.username}></i>}
          <span className="fas fa-user" style={{ textAlign: 'center' }}></span>
          <label>Full Name</label>
        </div>

        <div className="field mb-4">
          <input value={email} type="text" required {...register("email",{
            onChange:(e)=>{
              handleEmailChange(e)
            }
          })} />
          {errors.email && <i className="fas fa-exclamation-circle error-icon" title={errors.email}></i>}
          <span className="fas fa-user" style={{ textAlign: 'center' }}></span>
          <label>Email</label>
        </div>

        <div className="field mb-4">
          <input value={password}  type="password" required {...register("password",{
            onChange:(e)=>{
              handlePasswordChange(e)
            }
          })} autoComplete='new-password'/>
          {errors.password && <i className="fas fa-exclamation-circle error-icon" title={errors.password}></i>}
          <span className="fas fa-lock" style={{ textAlign: 'center' }}></span>
          <label>Password</label>
        </div>

        <div className="field">
          <input value={confirmPassword}  type="password" required {...register("confirmPassword",{
            onChange:(e)=>{
              handleConfirmPasswordChange(e)
            }
          })}/>
          {errors.confirmPassword && <i className="fas fa-exclamation-circle error-icon" title={errors.confirmPassword}></i>}
          <span className="fas fa-lock " style={{ textAlign: 'center' }}></span>
          <label>Confirm Password</label>
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type='submit'>Register</button>
        <div className="sign-up text-center">
          Already a member?
          <a onClick={() => onFormSwitch('register')} href="#">Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
