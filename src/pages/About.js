import React from "react";
import { Helmet } from "react-helmet";
import styles from "../About.module.css";
import img01 from "../images/ToyDrive01.jpg";
import img02 from "../images/ToyDrive02.jpg";
import img03 from "../images/ToyDrive03.jpg";

const About = () => {
  return (
    <div className={styles.AboutWrapper}>
      <div className={styles.PresImg} />
      <Helmet>
        <meta name="description" content="About Section of Do Something LA" />
        <meta name="keywords" content="About, Do Something" />
      </Helmet>
      <div className={styles.AboutSection}>
        <div className={styles.OuterFlex1}>
          <div className={styles.InnerFlex1}>
            <div>
              <h1>Last</h1>
            </div>
            <div className={styles.TextFlex}>
              <h1>Year</h1>
              <p>(2020)</p>
            </div>
          </div>
          <div className={styles.InnerFlex2}>
            <p>
              In 2020 we realized a lot of systemic forces were coming together
              to pinch people who were economically vulnerable. We started Do
              Something to find ways to help improve the lived experience of
              people in those positions. The Toy Giveaway was one way
            </p>
            <p>
              we saw we could help by making the holidays a little easier for
              those who wanted to give gifts to their kids but were unable to.
              It was successful and we gave around 4000 presents to 700
              families.
            </p>
          </div>
          <div className={styles.OuterGrid}>
            <div className={styles.ImageGrid}>
              <img src={img01} alt="toy giveaway 2019" />
              <img src={img02} alt="toy giveaway 2019" />
              <img src={img03} alt="toy giveaway 2019" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.AboutSection}>
        <div className={styles.OuterFlexSection2}>
          <div className={styles.OuterFlex2}>
            <div className={styles.InnerFlex1}>
              <div>
                <h1>This</h1>
              </div>
              <div className={styles.TextFlex}>
                <h1>Year</h1>
                <p>(2021)</p>
              </div>
            </div>
            <div className={styles.InnerFlexSec2}>
              <p>
                We want to double the amount of families we reach, so we’re
                starting earlier to source gifts and get the word out about the
                toy giveaway. To make those things happen we’re asking for
                donations from the public.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.OuterFlex2}>
          <div className={styles.InnerFlex1}>
            <div className={styles.TextFlexWhy}>
              <h1>Why?</h1>
              <p>(Beyond)</p>
            </div>
          </div>
          <div className={styles.InnerFlexSec3}>
            <p>
              We have an ambitious goal we will be working towards each year
              from here on out: No kid in LA without a yearly toy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
