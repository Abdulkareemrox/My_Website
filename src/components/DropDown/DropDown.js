import React, { useState } from "react";
import styled from "styled-components";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const DropDown = styled.div`
    .dropdown-group.active {
      display: block;
      background: #fff;
      position: absolute;
      padding: 10px;
      text-align: center;
      border: 1px solid grey;
      margin-left: -30px;
    }
    .dropdown-group {
      display: none;
    }
  `;

  return (
    <DropDown>
      <img
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
        src="/img/theme-switch.png"
        alt="close"
        width="30px"
        height="30px"
      />
      <div className={isOpen ? "dropdown-group active" : "dropdown-group"}>
        {props.children}
      </div>
    </DropDown>
  );
}

export default Dropdown;
