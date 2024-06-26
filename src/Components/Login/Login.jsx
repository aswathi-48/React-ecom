import React, { useContext, useState } from 'react';
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CgGirl } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import UserContext from '../../context/UserContext';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { setIsLoggedIn } = useContext(UserContext)

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded default username and password
    const defaultuserName = 'abhi';
    const defaultPassword = '1234';
    const defaultAccessToken = 'default_access_token_1234';


    const userData = {
      defaultuserName,
      defaultPassword
    }



    if (userName === defaultuserName && password === defaultPassword) {
      // Save access token to local storage
      localStorage.setItem("userData",JSON.stringify(userData))
      localStorage.setItem('accessToken', defaultAccessToken);
      setIsLoggedIn(true); // Set isLoggedIn to true
      navigate('/');
    } else {
      console.log('Invalid email or password. Please try again.');
    }
  };


  // console.log(isLoign, 'is login')

  return (
   
    <div className='login'>
            <form onSubmit={handleLogin} encType='multipart/form-data'>
            <div className='log-main'>
                <div className='log-main-one'>
                <div className='log-head'>
                    <h4>Login</h4>
                </div>
                <div className='log-body'>
                    <div  className='log-body-one'>
                    <div className='log-body-cntnt'>
                    <CgGirl className='log-icon'/>
                        <input type="text" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                    </div>
                  
                    <div className='log-body-cntnt'>
                    <MdOutlineLockOpen className='log-icon'/>
                        <input type="password" placeholder='Passoword' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>                   
                    <div className='log-btn'>
                        <button type='submit'>Login</button>
                    </div>
                    {error && <div className='log-error'>{error}</div>}
               <div className='log-frgt'>
                <p>Forgot Password? <Link to={'/forgotpass'}><b>Click</b></Link> </p>
             </div>
             <div className='log-para'>
                 <p>Don't have an account?<Link to='/register' className='log-link'> Register</Link></p>
            </div>
                </div>
                </div>
                </div> 
            </div>
            </form>
        </div>
  );
}

export default Login;
