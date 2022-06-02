import React from "react";
import styled from "styled-components";
import Dropdown from "./DropDown/DropDown";
import DropdownItem from "./DropDown/DropdownItem";
import { Menu, HomeMenu } from "../store/Data";
import { useMedia } from "../store/hooks";

const Navigation = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  background: #2d7abf;

  .Dropdown {
    margin-left: auto;
  }
  .btn {
    margin-right: 10px;
    padding: 10px;
    background: transparent;
    color: #fff;
    border-color: transparent;
    font-size: 18px;
    font-weight: bold;
  }
`;
export default function Header() {
  const { isDesktop, isMobile } = useMedia();
  let UpdatedMenu = [];
  return (
    <Navigation>
      {isDesktop &&
        HomeMenu.map((item) => <button className="btn">{item}</button>)}
      <div className="Dropdown">
        <Dropdown>
          {isMobile
            ? [...UpdatedMenu, ...Menu, ...HomeMenu].map((item) => (
                <DropdownItem>{item}</DropdownItem>
              ))
            : Menu.map((item) => <DropdownItem>{item}</DropdownItem>)}
        </Dropdown>
      </div>
    </Navigation>
  );
}
