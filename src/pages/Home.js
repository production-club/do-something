import React from "react";
import { NavLink as Link } from "react-router-dom";
import Helmet from "react-helmet";
import styles from "../Home.module.css";
import desktop from "../images/PresentDudePurp-01.svg"
import tablet from "../images/PresentDudePurp-02.svg"
import phone from "../images/PresentDudePurp-03.svg"

const Home = () => {
  return (
    <div className={styles.HomeWrapper}>
      <Helmet>
        <title> Do Something’s Annual Toy Giveaway!</title>
        <meta name="description" content="Home Section of Do Something LA" />
        <meta
          name="keywords"
          content="Home, Do Something, landing page, donate button"
        />
      </Helmet>

      <div className={styles.PresentWrapper}>
        <div className={styles.PresImgWrapper}>
          <img src= {desktop} className={styles.desktoppres} alt ="desktop present"/>
          <img src= {tablet} className={styles.tabletpres} alt ="tablet present" />
          <img src= {phone} className={styles.phonepres} alt= "phone present"/>
        </div>
        <div className={styles.PresentTextWrapper}>
          <h1> Do Something's <br/>Annual Toy Giveaway </h1>
          <h2>A gift giveaway for children and families from underserved communities. Presents are curated with playful education and growth in mind.</h2>
          <p>
          
           <p style={{color:'white', fontWeight:'bold'}}>
              6pm - 9pm <br/> December 18th, 2021
             </p>  Chinatown, Los Angles <br /> Location To Be Announced
          </p>
        </div>
      </div>
      <div className={styles.HomeTextOuterWrapper}>
        <div className={styles.HomeTextInnerWrapper}>
          <p>
            A toy giveaway just in time for the holidays for low-income families
            who need gifts for their children. <br /> <br/>The toys are for kids aged
            3 months to 18 years. <br/>
          </p>

          <p>
            We are currently looking for donations to buy GOOD toys. We do not
            accept drop off toys.
          </p>
        </div>
      </div>
      <div className={styles.DonateTextWrapper}>
        <p>Do you want to</p>
        <h1> Do Something? </h1>
      </div>
      <div></div>
      <div className={styles.HomeButtonWrapper}>
        <Link to="/donate" className={styles.homeLink}>
          <div className={styles.DonateButton}>DONATE</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
