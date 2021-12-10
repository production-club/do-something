import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import esflag from '../../images/mexican-flag.svg'
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
            <NavLink to= "/faq" className="NavLink">
              FAQ <span style={{fontSize:"x-small", marginTop:'1.25vh',marginLeft:'1px'}}></span>
            </NavLink>
              <NavLink to= "/faq-es" className="NavLink">
              FAQ <img src={esflag} style={{height: '0.8em', marginLeft: '5px', marginTop:'2px'}}alt="flag" />
            </NavLink>
              <NavLink to= "/faq-ch" className="NavLink">
              问答 <span style={{fontSize:"x-small", marginTop:'1.25vh', marginLeft:'1px'}}></span>
            </NavLink>
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
