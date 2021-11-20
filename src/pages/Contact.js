import React from "react";
import GoogMap from "../components/GoogleMap";
import Helmet from "react-helmet";

const Contact = () => {
  return (
    <div className="ContactWrapper">
      <Helmet>
        <title>Contact </title>
        <meta name="description" content="Contact Page of Do Something LA" />
        <meta name="keywords" content="Contact, Do Something, Email, Address" />
      </Helmet>
      <div className="ContactWrapperText">
        <a
          href="https://goo.gl/maps/Sxenhoa1Y3WppPAR8"
          target="_blank"
          rel="noreferrer"
        >
          <h2>
            Address: <br /> 1726 N Spring St, Los Angeles, CA 90012
          </h2>
        </a>
        <a href="tel:2135370219">
          <h2>
            Phone: <br /> 213.537.0219
          </h2>
        </a>

        <a href="mailto: toys@dosomething.club">
          <h2>
            Email: <br /> toys@dosomething.club
          </h2>
        </a>
      </div>
      <GoogMap />
    </div>
  );
};

export default Contact;
