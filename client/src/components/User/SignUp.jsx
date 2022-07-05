import axios from "axios";
import React, { useState } from "react";
import jwt from "jwt-decode";
import { getApiPath, setToken, setTokenTimeout } from "../../Common";
import "./SignUp.css";
import Header from "../Header/Header";
import LoginBg from "../project-files/Login-Bg-image.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import leftCorner from "../project-files/left_corner_login.svg"
import rightCorner from "../project-files/right_corner_login.svg"

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isNgo: false,
  });
  const [securityKey, setSecurityKey] = useState("");

  const HandleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "isNgo") {
      value = e.target.checked;
      setUser({ ...user, [name]: value });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    const SignUPURL = getApiPath() + "user/signup";
    console.log(user);
    axios
      .post(SignUPURL, user)
      .then((res) => {
        toast.success("Signed Up!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });

        setTimeout(() => {
          setToken(res.data.user);
          window.location.href = "/";
        }, 2200);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        console.log(err.response.data.message);
      });
  };

  const HandleSecurityCheck = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-up">
      <Header />
      <div className="sign-up-body">
        <div className="sign-up-image-section">
          <img src={leftCorner} alt="leftCorner" className="leftCornerBg" />
          <img src={rightCorner} alt="rightCorner" className="rightCornerBg" />
          <img src={LoginBg} alt="LoginBg" />
        </div>
        <div className="signup-form-wrapper">
          <h2>Sign Up</h2>{" "}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="labelInputWrapper">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                value={user.username}
                id="username"
                onChange={(event) => HandleInputChange(event)}
                placeholder="User name"
              />
            </div>
            <div className="labelInputWrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                id="email"
                placeholder="Email"
                onChange={(event) => HandleInputChange(event)}
              />
            </div>

            <div className="labelInputWrapper">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                value={user.password}
                placeholder="Password"
                onChange={(event) => HandleInputChange(event)}
              />
            </div>
            <div className="SubmitBtnWrapper">
              <button>Sign Up</button>
            </div>
            <p>
              Are you an NGO user?
              <Link to="/NGO/signup">Sign Up here</Link>
            </p>
            <p>
              Already a user?
              <Link to="/login">Login Here</Link>
            </p>
          </form>
        </div>
        <div className="signup-footer">
          <h3>
            <span> Welcome to</span> DustyPaws
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
