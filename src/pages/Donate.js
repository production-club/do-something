import React from "react";
import Helmet from "react-helmet";
const Donate = () => {
  return (
    <div className="DonateWrapper">
      <Helmet>
        {/* <title> Do Something // Donate</title> */}
        <meta name="description" content="Donate Section of Do Something LA" />
        <meta
          name="keywords"
          content="Donate, Do Something, Stripe Payment, donorbox"
        />
      </Helmet>
      <div className="iFrameWrapper">
        {/* <h3>Donate 💸</h3> */}
        <iframe
          title="donorbox"
          src="https://donorbox.org/embed/do-something-toy-giveaway"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameborder="0"
          scrolling="no"
          // height="300px"
          // width="100%"
          style={{
            maxWidth: 900,
            minWidth: 320,
            maxHeight: "none!important",
            minHeight: 1200,
            marginTop: 0,
            marginBottom: "100px",
          }}
        ></iframe>
        {/* <iframe
          src="https://donorbox.org/embed/do-something-toy-giveaway"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameborder="0"
          scrolling="no"
          height="900px"
          width="100%"
          style="max-width: 500px; min-width: 250px; max-height:none!important"
        ></iframe> */}
      </div>
      <div className="DonorContent">
        <p>
          Do Something has applied for tax exemption status to the IRS and we
          are pending a determination.
        </p>
      </div>
    </div>
  );
};

export default Donate;
