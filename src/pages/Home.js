import React from "react";
import { NavLink as Link } from "react-router-dom";
import Helmet from "react-helmet";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <Helmet>
        <meta name="description" content="Home Section of Do Something LA" />
        <meta
          name="keywords"
          content="Home, Do Something, landing page, donate button"
        />
      </Helmet>
      <div className="PresentWrapper">
        <div className="PresentTextWrapper">
          <h1>Annual Toy Giveaway </h1>
          <p>
            {" "}
            December 18th, 2021. 6pm - 9pm. <br /> 1725 Naud St, Los Angeles, CA
            90012
          </p>
        </div>
      </div>
      <div className="HomeTextOuterWrapper">
        <div className="HomeTextInnerWrapper">
          <p>
            A toy giveaway just in time for the holidays for low-income families
            who need gifts for their children. <br /> The toys are for kids aged
            XX-XX.
          </p>

          <p>
            We are currently looking for donations to buy GOOD toys We do not
            accept drop off toys.
          </p>
        </div>
      </div>
      <div className="DonateTextWrapper">
        <p>Do you want to</p>
        <h1> Do Something? </h1>
      </div>
      <div></div>
      <div className="HomeButtonWrapper">
        <Link to="/donate" className="homeLink">
          <div className="DonateButton">DONATE</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;