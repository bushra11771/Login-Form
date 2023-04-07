import React, { useState } from "react";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  return (
    <>
      <div className="container max-width:430px">
        <div className="form-ex">
          <span className="title">Login</span>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <div className="input-field">
              <i className="uil uil-user icon"></i>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Type Your Username"
                id="username"
                name="username"
                required
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-field">
              <i className="uil uil-lock-alt icon"></i>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Type Your Password"
                id="password"
                name="password"
                required
              />
            </div>

            <div className="text-right">
              <a href="#">Forgot password?</a>
            </div>

            <button className="login100-form-btn">Login</button>

            <div className="txt1 text-center p-t-54 p-b-20">
              <span>Or Sign Up Using</span>
            </div>
            <div className="flex-c-m">
              <a href="#" className="social-item bg1">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-item bg2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-item bg3">
                <i className="fab fa-google"></i>
              </a>
            </div>

            <div className="flex-col-c p-t-155">
              <span className="txt1 p-b-17">Or Sign Up Using</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
