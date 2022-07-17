import React from 'react';
import './LoginScreen.scss';
import logo from '../images/logo.png';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth.action';

function LoginScreen() {

  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login())
  }


  return (
<div className="login">
    <div className="login__container">
        <img src={logo} alt="logo" />
        <button onClick={handleLogin}>Login With Google</button>
    </div>
</div>
  )
}

export default LoginScreen