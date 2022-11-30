import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../context/Context';
import axios from 'axios';
const Login = () => {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {user,dispatch, isFetching} = useContext(Context);
  const handleSubmit = async (e)=> {
    e.preventDefault();
    dispatch({type:'LOGIN_START'});
    try {
      const res = await axios.post('/auth/login', {email,password});
       console.log(res.data);
      dispatch({type:"LOGIN_SUCCESS", payload:res.data });
      
    } catch (err) {
      dispatch({type:'LOGIN_FAILURE'});
    }
    console.log(user);
    console.log(isFetching);
  }
  return (
    <div className='login'>
    <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="email" className='loginInput' placeholder='Enter your email...' onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...' onChange={(e)=>setPassword(e.target.value)} />
            <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
        <Link className='link' to='/register'>REGISTER</Link>
        </button>
    </div>
  )
}

export default Login