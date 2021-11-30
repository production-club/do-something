import React from "react";
import { NavLink as Link } from "react-router-dom";
import Helmet from "react-helmet";
import styles from "../Home.module.css";
import presBody from "../images/presentBodyFlex.svg"
import presFace from "../images/presentFaceFlex.svg"
import presFeet from "../images/presentFeetFlex.svg"
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
          <img src= {desktop} className={styles.desktoppres} />
          <img src= {tablet} className={styles.tabletpres} />
          <img src= {phone} className={styles.phonepres} />
        {/* <img src= {presBody} alt ="present body" className={styles.PresBody}/> */}
        {/* <img src= {presFace} alt ="present face" className={styles.PresFace}/> */}
        {/* <img src= {presFeet} alt ="present feet" className={styles.PresFeet}/> */}
        </div>
        <div className={styles.PresentTextWrapper}>
          <h1>Annual Toy Giveaway </h1>
          <p>
            {" "}
            December 18th, 2021. 6pm - 9pm. <br /> Location TBA
          </p>
        </div>
      </div>
      <div className={styles.HomeTextOuterWrapper}>
        <div className={styles.HomeTextInnerWrapper}>
          <p>
            A toy giveaway just in time for the holidays for low-income families
            who need gifts for their children. <br /> The toys are for kids aged
            3 months to 18 years.
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
