import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/authContext";
import { Live } from "../views/Live";
import { Link } from "react-router-dom";

function FormsFirebase() {
  const auth = useAuth();
  const { displayName } = auth.user
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
    setEmailRegister('');
    setPasswordRegister('');
  };
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
    setEmail('');
    setPassword('');
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  const handleLogout = () => {
    auth.logout();
  }

  return (
    <div className="App">
      <Link to='/live'></Link>
      <form className="form">
        <h3 className="title">Register</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => handleRegister(e)} className="button">
          submit
        </button>
      </form>
      {displayName && <h5>welcome : {displayName}</h5>}
      <form className="form">
        <h3 className="title">Login</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => handleLogin(e)} className="button">
          submit
        </button>
        <button onClick={(e) => handleGoogle(e)} className="button">
          Google
        </button>
      </form>

      <button onClick={()=> handleLogout()} className="button">Logout</button>
    </div>
  );
}

export default FormsFirebase;