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
        <Helmet>
          <title>A Little About Us! </title>
          <meta name="description" content="About Section of Do Something LA" />
          <meta name="keywords" content="About, Do Something" />
        </Helmet>
        <div className={styles.ImgWrapper}>
          <div className={styles.PresImg} />
        </div>
        <div className={styles.CopyWrapper}>
          <div className={styles.HeadingWrapper}>
            <h1>In 2021...</h1>
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
              around 4,000 presents to 1,000 families.
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
            kids but were unable to. It was successful and we gave around 4,000
            presents to 1,000 families.
          </p>
          <img src={img03} alt="toy drive 2020" />
        </div>
        <div className={styles.CopyWrapper}>
          <div className={styles.HeadingWrapper}>
            <div className={styles.HeadingFlex}></div>
            <h1>In 2021...</h1>
          </div>
          <div className={styles.alignP}>
            <p>
              We want to double the amount of families we reach, so we’re
              starting earlier to source gifts and get the word out about the
              toy giveaway. To make those things happen we’re asking for
              donations from the public.
            </p>
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
