import React from "react";
import GoogMap from "../components/GoogleMap";

const Contact = () => {
  return (
    <div className="ContactWrapper">
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

        <a href="mailto: info@production.club">
          <h2>
            Email: <br /> info@production.club
          </h2>
        </a>
      </div>
      <GoogMap />
    </div>
  );
};

export default Contact;
