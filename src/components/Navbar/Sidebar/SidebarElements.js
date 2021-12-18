import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #261f26;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
  color: #f86149;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  
  cursor: pointer;
  
  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
  `;

export const SidebarMenu = styled.ul`
/* padding:2em; */
margin-top: 23vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: left;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  @media screen and (min-width:560px){
  grid-template-rows:repeat(6,80px);
  }
  @media screen and (max-height:350px){
  grid-template-rows:repeat(6,40px);
  }
`;
