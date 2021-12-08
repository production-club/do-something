import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="navFlex">
        <Nav>
          <NavLink to="/">
            {" "}
            <div className="svgDiv"/>
          </NavLink>
          <Bars onClick={toggle} />
          <NavMenu>
            <NavLink to="/about" className="NavLink">
              About
            </NavLink>
            <NavLink to="/donate" className="NavLink">
              Donate
            </NavLink>
            <NavLink to="/contact" className="NavLink">
              Contact
            </NavLink>
            {/* <NavLink to= "/faq" className="NavLink">
              FAQ
            </NavLink> */}
           <NavLink to="/" exact className="NavLink">
              Home
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
