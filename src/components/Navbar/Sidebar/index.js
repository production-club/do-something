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
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/donate">Donate</SidebarLink>
          <SidebarLink to="/contact">Contact</SidebarLink>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/volunter">Volunteer</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
