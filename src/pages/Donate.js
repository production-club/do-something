import React from "react";

const Donate = () => {
  return (
    <div className="DonateWrapper">
      <div className="iFrameWrapper">
        <iframe
          title="donorbox"
          src="https://donorbox.org/embed/toy-drive-3"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameborder="0"
          scrolling="no"
          height="900px"
          width="100%"
          style={{
            maxWidth: 500,
            minWidth: 250,
            maxHeight: "none",
            marginTop: 200,
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Donate;
