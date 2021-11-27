import React from "react";
import { Helmet } from "react-helmet";
import styles from "../About.module.css";
import img01 from "../images/ToyDrive01.jpg";
import img02 from "../images/ToyDrive02.jpg";
import img03 from "../images/ToyDrive03.jpg";

const About = () => {
  return (
    <div className={styles.AboutWrapper}>
      <div className={styles.InnerWrapper}>
        <div className={styles.TitleWrapper}>
          <h1 className={styles.Title}>Do Something. </h1>
        </div>
        <Helmet>
          <meta name="description" content="About Section of Do Something LA" />
          <meta name="keywords" content="About, Do Something" />
        </Helmet>
        <title>A Little About Us! </title>
        <div className={styles.ImgWrapper}>
          <div className={styles.PresImg} />
        </div>
        <div className={styles.CopyWrapper}>
          <div className={styles.HeadingWrapper}>
            <h1>Last Year</h1>
            <h3>(2020)</h3>
          </div>
          <p className={styles.TabletP}>
            {" "}
            In 2020 we realized a lot of systemic forces were coming together to
            pinch people who were economically vulnerable. We started Do
            Something to find ways to help improve the lived experience of
            people in those positions.
          </p>
          <div className={styles.HomePFlex}>
            <p>
              {" "}
              In 2020 we realized a lot of systemic forces were coming together
              to pinch people who were economically vulnerable. We started Do
              Something to find ways to help improve the lived experience of
              people in those positions.
            </p>
            <p>
              {" "}
              The Toy Giveaway was one way we saw we could help by making the
              holidays a little easier for those who wanted to give gifts to
              their kids but were unable to. It was successful and we gave
              around 4000 presents to 700 families.
            </p>
          </div>
          <div className={styles.DesktopPics}>
            <img src={img01} alt="toy drive 2020" />
            <img src={img02} alt="toy drive 2020" />
            <img src={img03} alt="toy drive 2020" />
          </div>
        </div>
        <div className={styles.MobileCopy}>
          <img src={img01} alt="toy drive 2020" />
          <p>
            In 2020 we realized a lot of systemic forces were coming together to
            pinch people who were economically vulnerable. We started Do
            Something to find ways to help improve the lived experience of
            people in those positions.
          </p>
          <img src={img02} alt="toy drive 2020" />
          <p>
            The Toy Giveaway was one way we saw we could help by making the
            holidays a little easier for those who wanted to give gifts to their
            kids but were unable to. It was successful and we gave around 4000
            presents to 700 families.
          </p>
          <img src={img03} alt="toy drive 2020" />
        </div>
        <div className={styles.CopyWrapper}>
          <div className={styles.HeadingWrapper}>
            <div className={styles.HeadingFlex}></div>
            <h1>This Year</h1>
            <h3>(2021)</h3>
          </div>
          <p>
            We want to double the amount of families we reach, so we’re starting
            earlier to source gifts and get the word out about the toy giveaway.
            To make those things happen we’re asking for donations from the
            public.
          </p>
          <div className={styles.WhyWrapper}>
            <div className={styles.HeadingWrapper}>
              <h1>Why?</h1>
              <h3>(Beyond)</h3>
            </div>
            <p>
              We have an ambitious goal we will be working towards each year
              from here on out: No kid in LA without a yearly toy.
              <br />
              <br />
              <br />
              We’re aiming for this because of two main reasons:
            </p>
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
        </div>
        <div className={styles.RibbonFeetContainer}>
          <div className={styles.RibbonFeet} />
        </div>
      </div>
      <div className={styles.TabletPictures}>
        <img src={img01} alt="toy drive 2020" />
        <img src={img02} alt="toy drive 2020" />
        <img src={img03} alt="toy drive 2020" />
        <div className={styles.PresentTablet} />
      </div>
    </div>
  );
};

export default About;
