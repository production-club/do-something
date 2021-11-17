import React from "react";
import PCLogo from "../logo.png";
import PCEmblem from "../production-club-logo.svg";
import LinkedIn from "../images/linkedin.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
export default function Footer() {
  return (
    <div className="FooterWrapper">
      <div className="FooterFlex">
        <img src={PCLogo} alt="production club" className="PCLogo" />
        <div className="FooterInnerFlex">
          <div className="PCLinkDiv">
            <a
              href="https://www.production.club"
              target="_blank"
              rel="noreferrer"
              className="PCLink"
            >
              {" "}
              <img src={PCEmblem} alt="pc logo" />{" "}
            </a>
          </div>
          <div className="SMLinkDiv">
            <a
              href="https://www.linkedin.com/company/productionclub/"
              target="blank"
              rel="noreferrer"
            >
              {" "}
              <img src={LinkedIn} alt="linkedin logo" />
            </a>
            <a
              href="https://www.instagram.com/productionclub/"
              target="blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Instagram} alt="instagram logo png" />
            </a>
            <a
              href="https://www.facebook.com/ProductionClub/"
              target="blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Facebook} alt="facebook logo png" />
            </a>
            <a
              href="https://twitter.com/productionclub/"
              target="blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Twitter} alt="twitter icon png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
