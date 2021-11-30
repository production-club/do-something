import React from "react";
import Helmet from "react-helmet";
import styles from "../Donate.module.css";

const Donate = () => {
  return (
    <div className={styles.DonateWrapper}>
   
      <Helmet>
        <title> Donation Page!</title>
        <meta name="description" content="Donate Section of Do Something LA" />
        <meta
          name="keywords"
          content="Donate, Do Something, Stripe Payment, donorbox"
        />
      </Helmet>
      <div className={styles.iFrameWrapper}>
        <div className={styles.DonorCTA}>
          <p>Donations will help Do Something buy a selection of presents that are curated around our goals of playful education and growth.</p>
        </div>
        <iframe
          title="donorbox"
          src="https://donorbox.org/embed/do-something-toy-giveaway"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameborder="0"
          scrolling="yes"
          style={{
            maxWidth: 900,
            minWidth: 320,
            maxHeight: "none!important",
            minHeight: 600,
            marginBottom: 20
          }}
        ></iframe>
            <div className={styles.DonorContent}>
              <p>
           Do Something has applied for tax exemption status as a 501(c)(3) to the IRS and we are pending a determination. This donation will be tax deductible as soon as we get approved, you will be notified via email. 
              </p>
            </div>
      </div>
    </div>
  );
};

export default Donate;
