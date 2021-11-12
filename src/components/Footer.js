import React from "react";
import PCLogo from "../logo.png";
import PCEmblem from "../production-club-logo.svg";
export default function Footer() {
  return (
    <div className="FooterWrapper">
      <div className="footerImages">
        <img src={PCLogo} alt="production club" className="PCLogo" />
        <a
          href="https://www.production.club"
          target="_blank"
          className="PCLink"
        >
          {" "}
          <img src={PCEmblem} />{" "}
        </a>
      </div>
    </div>
  );
}
