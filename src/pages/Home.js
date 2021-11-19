import React from "react";
import { NavLink as Link } from "react-router-dom";
import Helmet from "react-helmet";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <div className="HomeTextWrapper">
        <h3>
          A toy giveaway just in time for the holidays for low-income families
          who need gifts for their children. The toys are for kids aged XX-XX.
        </h3>
        <p>
          <h4 style={{ fontWeight: "bold" }}> Event Info </h4>
          <br /> Date: 12.18.21 <br /> Time: 6pm - 9pm <br />
          Location: 1725 Naud St, Los Angeles, Ca ZIPCODE
        </p>
        <h3>
          We are currently looking for donations to buy GOOD toys We do not
          accept drop off toys.
        </h3>
        <h2>Do you want Do Something?</h2>
      </div>
      <div className="HomeButtonWrapper">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Section of Do Something LA" />
          <meta
            name="keywords"
            content="Home, Do Something, landing page, donate button"
          />
        </Helmet>
        <Link to="/donate" className="homeLink">
          <div className="DonateButton">DONATE</div>
        </Link>
        {/* <Link to="/volunteer" className="homeLink">
          <div className="VolunteerButton">VOLUNTEER</div>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
