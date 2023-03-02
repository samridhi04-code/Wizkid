import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "../login/Login.css";

export const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  });

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };
  return (
    <>
      <div className="container-fluid d-flex justify-content-center loginForm p-5">
        {/* <div className="row"> */}
        {/* <div className="col-6"></div> */}
        <div className="cover my-5 py-4">
          <h1 className="login">Login</h1>
          <input className="mb-3" type="text" placeholder="username" />
          <input className="mb-3" type="password" placeholder="password" />

          <div className="login-btn mb-3" onClick={popup}>
            Login
          </div>

          <p className="text">Or login using</p>

          <div className="alt-login mb-4">
            <div className="facebook"></div>
            <div className="google">
              <GoogleLogin
                className="blue"
                clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
                buttonText=""
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false} // alternative is true, which keeps the user signed in
                icon={false} // alt is true, and this puts the google logo on your button, but I don't like it
                theme="dark" // alternative is light, which is white
              />
            </div>
          </div>

          <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Username or password incorrect</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
