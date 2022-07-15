import React from 'react';
import './LoginScreen.scss';
import logo from '../images/logo.png';

function LoginScreen() {
  return (
<div className="login">
    <div className="login__container">
        <img src={logo} alt="logo" />
        <button>Login With Google</button>
    </div>
</div>
  )
}

export default LoginScreen