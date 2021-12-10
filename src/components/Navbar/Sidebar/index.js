import React from "react";
import {
  Icon,
  SidebarContainer,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

import esflag from "../../../images/mexican-flag.svg"

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
          <SidebarLink to= "/faq" onClick={toggle} className="SidebarLink">FAQ <span style={{fontSize: 'x-small', marginTop:'1.25vh', marginLeft:'2px'}}></span></SidebarLink>
          <SidebarLink to= "/faq-es" onClick={toggle} className="SidebarLink">FAQ <img src={esflag} style={{height: '0.7em', marginLeft: '5px', marginBottom:'10px'}}alt="flag" /></SidebarLink>
          <SidebarLink to= "/faq-ch" onClick={toggle} className="SidebarLink">问答 <span style={{fontSize: 'x-small', marginTop:'1.25vh', marginLeft:'2px'}}></span></SidebarLink>
          <SidebarLink to="/" exact onClick={toggle} className="SidebarLink">
            Home
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
