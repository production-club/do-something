import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: transparent;
  height: 0px;
  display: flex;
  width: 95vw;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw- 1000px) / 2);
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-top: 6rem;
  height: 100%;
  font-size: 2em;
  cursor: pointer;

  &.active {
    color: #f86149;
  }
  @media screen and (max-width: 900px){
    font-size: 0.8em;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #f86149;

  @media screen and (max-width: 781px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 0;
    /* transform: translate(-100%, 75%); */
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 781px) {
    display: none;
  } ;
`;
