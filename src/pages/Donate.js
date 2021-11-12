import React from "react";

const Donate = () => {
  return (
    <div className="DonateWrapper">
      <div className="iFrameWrapper">
        {/* <h3>Donate 💸</h3> */}
        <iframe
          title="donorbox"
          src="https://donorbox.org/embed/toy-drive-3"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameborder="0"
          scrolling="yes"
          height="900px"
          width="100%"
          style={{
            maxWidth: 500,
            minWidth: 250,
            maxHeight: "100vh",
            minHeight: "100vh",
            marginTop: 0,
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Donate;
