import React from "react";
import { NavLink as Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomeWrapper">
      <div className="HomeTextWrapper">
        <h3>
          A toy giveaway just in time for the holidays for low-income families
          who need gifts for their children. The toys are for kids aged XX-XX.
        </h3>
        <p>
          Event Info Date: 12.21.21 Time: 6pm - 9pm Location: 1725 Naud St, Los
          Angeles, Ca ZIPCODE
        </p>
        <h3>
          We are currently looking for donations to buy GOOD toys and for
          volunteers to work the event. We do not accept toys.
        </h3>
        <h2>Do you want Do Something?</h2>
      </div>
      <div className="HomeButtonWrapper">
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
