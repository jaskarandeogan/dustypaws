import React, { useState } from "react";
import "./dropdown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { getApiPath, setToken } from "../../Common";
import { toast } from "react-toastify";

const AnimatedDropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props.initialText);
  // const options = ["Accept", "Completed", "Spam"];

  function handleItemSelect(event) {
    setSelected(event.target.textContent);
    setIsActive(false);
    if (props.onOptionSelect) {
      props.onOptionSelect(event.target.textContent);
    } else if (props.HandleComplaintDropDown) {
      props.HandleComplaintDropDown(event.target.textContent, props.reportId);
    } else {
    }
  }

  return (
    <>
      <div className={`Animated-dropdown ${selected}`} id={isActive ? `active` : "disabled"}>
        <div
          className="dropdown-btn"
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          <span>{selected}</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {props.options.map((option, idx) => (
              <div
                key={idx}
                id={idx}
                onClick={handleItemSelect}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default AnimatedDropdown;
