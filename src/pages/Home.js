import React from "react";
import { NavLink as Link } from "react-router-dom";
import Helmet from "react-helmet";
import styles from "../Home.module.css";
import presentNewYear from '../images/2022present.svg'
import threePresents from '../images/threepresents-illustration.png'
import HomeContact from '../components/HomeContact'
import fourPresentsMobile from '../images/fourpresents-illustration.png'
import fourPresentsHome from '../images/fourpresents-illustration.png'

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

        <div className={styles.sec1}>
            <img src={threePresents} className={styles.threePresents} alt='three presents'/>
            <div className={styles.copyContainer}>
                <h1>Thank you!</h1>
                <h2>To our volunteers, donors, and sponsors!</h2>
                <p>Do Something is proud to announce that we are officially a 501(c)(3).</p>
                <p>Our Tax ID is <span style={{fontWeight:'bold'}}>37-2017868</span>.</p>
                <p>Our Toy Giveaway was a success that couldn't have been done without the contributions of so many people.</p>
            </div>
        </div>
       <div className={styles.sec2}>
           <p>With your help, we were able to make a difference in the lives of children this year. Just take a look!</p>
           <img src={fourPresentsMobile} className={styles.fourPresentsMobile}/>
           <div className={styles.sec2flex}>
           <div className={styles.col}>
           <h1>1,500</h1>
           <p>We were able tro serve approximately 1,500 kids our curated gift bags. Out of 10,000+ toys and 2,000+ books, we were left with only 1,000 or so items which went into the caring hands of Celebration Nation.</p>
           </div>
           <div className={styles.col}>
           <h1>1,000</h1>
           <p>Not to mention we were able to feed over 1,000 people at the event at Burgerlords. </p>
           </div>
           <div className={styles.col}>
           <h1>$50,000</h1>
           <p>One of our main goals of the Toy Giveaway was to give toys that focused on child development without promoting gender biases. We were only able to do this because of our donors who contributed over $50,000 to make it happen.</p>
           </div>
           </div>
           <img src={fourPresentsHome} className={styles.fourPresentsHome}/>
        </div>
        <div className={styles.sec3}>
            <p>Thank you for contributing Do Something in 2021. We hope to see you again in 2022.</p>
            <img src={presentNewYear} className={styles.presentNewYear} alt='present'/>
            <div className={styles.btnFlex}>
            <div className={styles.donateFlex}>
                <p>Do you want to</p>
                <h2>Do Something?</h2>
                    <Link to='/donate'>
                <div className={styles.donateBtn}>
                  DONATE
                </div>  
                    </Link>
            </div>
         <div className={styles.donateFlex}>
             <div className={styles.contactCopy}>
                <p>Do you want to</p>
                <h2>stay in contact?</h2>
             </div>
                    <HomeContact />   
            </div> 
        </div>
 
        </div>
    </div>
  );
};

export default Home;
