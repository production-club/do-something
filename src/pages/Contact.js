import React from "react";
import Helmet from "react-helmet";
import styles from "../Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.ContactWrapper}>
      <Helmet>
        {/* <title>Contact </title> */}
        <meta name="description" content="Contact Page of Do Something LA" />
        <meta name="keywords" content="Contact, Do Something, Email, Address" />
      </Helmet>
      <div className={styles.ContactInnerWrapper}>
        <div className={styles.leftContactPanel}>
          <h1 className={styles.Helloh1}>HEY</h1>
          <h1 className={styles.Helloh12}>HELLOOO</h1>
        </div>
        <div className={styles.rightContactPanel}>right</div>
      </div>
    </div>
  );
};

export default Contact;
