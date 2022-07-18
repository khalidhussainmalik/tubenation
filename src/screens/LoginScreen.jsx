import React, { useEffect } from "react";
import "./LoginScreen.scss";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/auth.action";

function LoginScreen() {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />
        <button onClick={handleLogin}>Login With Google</button>
      </div>
    </div>
  );
}

export default LoginScreen;
