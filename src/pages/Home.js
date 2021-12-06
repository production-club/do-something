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
          
             <p style={{color:'white', fontWeight:'bold'}} className={styles.deskp}>
              6pm - 9pm. December 18th, 2021.
             </p > <p style={{color:'white', fontWeight:'bold'}}className={styles.tabp}>6pm - 9pm <br/> December 18th, 2021.</p><p className={styles.deskp}> 1725 Naud st, Los Angeles, CA 90012 | Chinatown DTLA</p>
             <p className={styles.tabp}> 1725 Naud st, Los Angeles, CA 90012 <br/> Chinatown DTLA</p>
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
          <div className={styles.WhyWrapper}>
            <div className={styles.HeadingWrapper}>
              <h1>Why?</h1>
            </div>
            <div className={styles.alignP}>
            <p>
              We have an ambitious goal we will be working towards each year
              from here on out: No kid in LA without a yearly toy.
              <br />
              
              <br />
              We’re aiming for this because of two main reasons:
            </p>
            </div>
          </div>
          <div className={styles.ReasonsWhy}>
            <div className={styles.WhyInnerWrapper}>
              <h1 className={styles.h1Outline}>01</h1>
              <p>
                Kids have the least amount of agency to change their realities.
              </p>
            </div>
            <div className={styles.WhyInnerWrapper}>
              <h1 className={styles.h1Outline}>02</h1>
              <p>
                We want to impact the future through education and we feel that
                teaching kids the benefits of generosity will be extremely
                impactful. This is because kids’ brain plasticity makes it
                easier for them to learn new ways of being better than adults.
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
