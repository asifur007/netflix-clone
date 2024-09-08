import React from "react";
import "./LoginScreen.css"

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
        <button className="loginScreen_button">
            Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
