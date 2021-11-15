import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/volunteer">Volunteer</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
