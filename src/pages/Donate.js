import React from "react";
import Helmet from "react-helmet";
import styles from "../Donate.module.css";

const Donate = () => {
  return (
    <div className={styles.DonateWrapper}>
      <div className={styles.TitleWrapper}>
        <h1 className={styles.Title}>Do Something. </h1>
      </div>
      <Helmet>
        <title> Donation Page!</title>
        <meta name="description" content="Donate Section of Do Something LA" />
        <meta
          name="keywords"
          content="Donate, Do Something, Stripe Payment, donorbox"
        />
      </Helmet>
      <div className={styles.iFrameWrapper}>
        <iframe
          title="donorbox"
          src="https://donorbox.org/embed/do-something-toy-giveaway"
          name="donorbox"
          allowpaymentrequest="allowpaymentrequest"
          seamless="seamless"
          frameborder="0"
          scrolling="no"
          style={{
            maxWidth: 900,
            minWidth: 320,
            maxHeight: "none!important",
            minHeight: 1200,
            marginTop: 0,
            marginBottom: "100px",
          }}
        ></iframe>
      </div>
      <div className={styles.DonorContent}>
        <p>
          Do Something has applied for tax exemption status to the IRS and we
          are pending a determination.
        </p>
      </div>
    </div>
  );
};

export default Donate;
