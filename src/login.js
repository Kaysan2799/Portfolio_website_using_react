// import "./loginjs.js"
import "./login.css"

import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  const [submit , setSubmit] = useState(false);
  function submitForm(event) {
    // Prevent the form from submitting automatically
    event.preventDefault();
  
    // Get the username and password inputs
    var usernameInput = document.getElementById("admin");
    var passwordInput = document.getElementById("password");
  
    // Check if the username and password are correct
    if (usernameInput.value === "admin" && passwordInput.value === "admin") {
      setSubmit(true);

    } else {
      setSubmit(false);
      // If the username and password are incorrect, display an error message
      alert("Incorrect username or password.");
    }
  }
  
  return (
    <>
      {submit ? <><Navbar/><Home/><Footer/></> : 
    <div>
    {/* <video autoplay muted loop id="myVideo">
        <source src="./images/vid2.mp4" type="video/mp4" />
      </video> */}
      <img src={require('./images/39.gif')} class="d-block w-100" alt="..."/>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" id="admin" required />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" id="password" required />
            <label>Password</label>
          </div>
          <a href="/" id="submit-button" onClick={submitForm}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form> 
      </div>
      </div>}
    </>
  );
}

export default Login;