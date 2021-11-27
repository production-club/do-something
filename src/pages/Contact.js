import React from "react";
import Helmet from "react-helmet";
import ContactForm from "../components/ContactForm";
import styles from "../Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.ContactWrapper}>
      <div className={styles.TitleWrapper}>
        <h1 className={styles.Title}>Do Something. </h1>
      </div>
      <Helmet>
        <title> Contact Us!</title>
        <meta name="description" content="Contact Page of Do Something LA" />
        <meta name="keywords" content="Contact, Do Something, Email, Address" />
      </Helmet>
      <div className={styles.ContactInnerWrapper}>
        <div className={styles.leftContactPanel}>
          <h1 className={styles.Helloh1}>HEY</h1>
          <h1 className={styles.Helloh12}>HELLOOO</h1>
        </div>
        <div className={styles.rightContactPanel}>
          <div className={styles.ContactCopy}>
            <h3>
              If you have any questions about getting gifts, donating or
              volunteering, use the form below to send us an email and we will
              get back to you with an answer.{" "}
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
