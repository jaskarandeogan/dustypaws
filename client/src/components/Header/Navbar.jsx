import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteToken, getToken } from "../../Common";
import { User } from "../Home";
import PopUp from "../ModelPopups/PopUp";

const Navbar = () => {
  let loggedInUser = useContext(User);

  const [loginPopUp, setLoginPopUp] = useState(false);

  const [signUpPopUp, setSignUpPopUp] = useState(false);

  const RenderNavBar = () => {
    if (loggedInUser?.role === "NGO") {
      return (
        <Link to="/eventform">
          <li>Create Event</li>
        </Link>
      );
    } else {
      return (
        <>
          <ul className="dropDown">
            <li className="btn btn-drop">Explore</li>
            <li className="dropDown-options active">
              <Link to="/event">Event</Link>
              <Link to="/event">Partners</Link>
            </li>
          </ul>
          <Link to="/#reportSection">
            <li>Report</li>
          </Link>
          <Link to="/donate">
            <li>Donate</li>
          </Link>
          <Link to="/about">
            <li>About us </li>
          </Link>
        </>
      );
    }
  };
  const HandleLogoutClick = () => {
    deleteToken();
    window.location.href = "/";
    alert("Logged out!!");
  };

  const ShowSignUpPopUp = (e) => {
    setSignUpPopUp(!signUpPopUp);
  };

  const ShowLoginPopUp = (e) => {
    setLoginPopUp(!loginPopUp);
  };

  let popUpContent = "";
  if (signUpPopUp) {
    popUpContent = <PopUp TogglePopUp={ShowSignUpPopUp} showSignUp={true} />;
  }
  if (loginPopUp) {
    popUpContent = <PopUp TogglePopUp={ShowLoginPopUp} showLogin={true} />;
  }

  const HandleLoggedInUI = () => {
    let usertoken = getToken();
    if (usertoken !== null && usertoken !== "undefined" && usertoken !== "") {
      return (
        <>
          <div className="securityWrapper">
            <Link to="/profile">Profile</Link>
            <a href="#" onClick={HandleLogoutClick}>
              Logout
            </a>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="securityWrapper">
            <a href="#" onClick={ShowSignUpPopUp}>
              Sign up
            </a>
            <a href="#" onClick={ShowLoginPopUp}>
              Login
            </a>
          </div>
        </>
      );
    }
  };

  useEffect(
    (e) => {
      HandleLoggedInUI();
    },
    [HandleLoggedInUI]
  );

  return (
    <>
      <nav>
        <ul>
          {RenderNavBar()}
          <div>
            <li className="nav-dropDown">
              <img src="" alt="user-profile" />
              <div className="user-profile">{HandleLoggedInUI()}</div>
            </li>
          </div>
        </ul>
      </nav>
      {popUpContent}
    </>
  );
};

export default Navbar;
