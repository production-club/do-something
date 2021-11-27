import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="navFlex">
        <Nav>
          <NavLink to="/">
            {" "}
            <h1 className="DSLogo"> Do Something.</h1>
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
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;
