import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/donate" activeStyle>
            Donate
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/volunteer" activeStyle>
            Volunteer
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
