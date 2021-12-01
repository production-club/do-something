import React from "react";
import {
  Icon,
  SidebarContainer,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} isOpen={isOpen}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarLink to="/" onClick={toggle} className="DSLogoSide">
          {" "}
          Do Something.
        </SidebarLink>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle} className="SidebarLink">
            About
          </SidebarLink>
          <SidebarLink to="/donate" onClick={toggle} className="SidebarLink">
            Donate
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle} className="SidebarLink">
            Contact
          </SidebarLink>
          <SidebarLink to="/" exact onClick={toggle} className="SidebarLink">
            Home
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
