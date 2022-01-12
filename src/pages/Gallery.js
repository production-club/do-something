import React from 'react'
import styles from '../Gallery.module.css'
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'
import pic1 from '../carousel/pic1.jpg'
import pic2 from '../carousel/pic2.jpg'
import pic3 from '../carousel/pic3.jpg'
import pic4 from '../carousel/pic4.jpg'
import pic5 from '../carousel/pic5.jpg'
import pic6 from '../carousel/pic6.jpg'
import pic7 from '../carousel/pic7.jpg'
import pic8 from '../carousel/pic8.jpg'
import pic9 from '../carousel/pic9.jpg'
import pic10 from '../carousel/pic10.jpg'
import pic11 from '../carousel/pic11.jpg'
import pic12 from '../carousel/pic12.jpg'
import pic13 from '../carousel/pic13.jpg'
import pic14 from '../carousel/pic14.jpg'
import pic15 from '../carousel/pic15.jpg'
import pic16 from '../carousel/pic16.jpg'
import pic17 from '../carousel/pic17.jpg'
import pic18 from '../carousel/pic18.jpg'
import pic19 from '../carousel/pic19.jpg'
import pic20 from '../carousel/pic20.jpg'
import pic21 from '../carousel/pic21.jpg'
import pic22 from '../carousel/pic22.jpg'
import pic23 from '../carousel/pic23.jpg'
import pic24 from '../carousel/pic24.jpg'
import pic25 from '../carousel/pic25.jpg'
import pic26 from '../carousel/pic26.jpg'
import pic27 from '../carousel/pic27.jpg'
import pic28 from '../carousel/pic28.jpg'
import pic29 from '../carousel/pic29.jpg'
import pic30 from '../carousel/pic30.jpg'
import pic31 from '../carousel/pic31.jpg'
import pic32 from '../carousel/pic32.jpg'
import pic33 from '../carousel/pic33.jpg'
import pic34 from '../carousel/pic34.jpg'
import pic35 from '../carousel/pic35.jpg'
import pic36 from '../carousel/pic36.jpg'
import pic37 from '../carousel/pic37.jpg'
import pic38 from '../carousel/pic38.jpg'
import pic39 from '../carousel/pic39.jpg'
import pic40 from '../carousel/pic40.jpg'
import pic41 from '../carousel/pic41.jpg'
import pic42 from '../carousel/pic42.jpg'
import pic43 from '../carousel/pic43.jpg'
import pic44 from '../carousel/pic44.jpg'
import pic45 from '../carousel/pic45.jpg'
import pic46 from '../carousel/pic46.jpg'
import pic47 from '../carousel/pic47.jpg'
import pic48 from '../carousel/pic48.jpg'
import pic49 from '../carousel/pic49.jpg'
import {Helmet } from "react-helmet"

const Gallery = () => {
  return (
      
    <div className={styles.galleryWrapper}>
        <Helmet>
            <title>Gallery</title>
            <meta name='description' content='Gallery from Do Something Toy Drive 2021'/>
        </Helmet>
      <div className={styles.galleryInnerWrapper}>
        <SimpleReactLightbox>
   <SRLWrapper>
<div className={styles.row}>
  <div className={styles.column}>
    <img src={pic1} alt='Toy Giveaway 2021'/>
    <img src={pic2} alt= 'Toy Giveaway 2021'/>
    <img src={pic3} alt= 'toy giveaway 2021'/>
    <img src={pic4} alt= 'toy giveaway 2021'/>
    <img src={pic5} alt= 'toy giveawsay 2021'/>
    <img src={pic6} alt= 'toy giveaway 2021'/>
    <img src={pic7} alt='toy giveaway 2021'/>
    <img src={pic38} alt='toy giveaway 2021'/>
    <img src={pic39} alt='toy giveaway 2021'/>
    <img src={pic47} alt='toy giveaway 2021'/>
  </div>
   <div className={styles.column}>
    <img src={pic8} alt = 'toy giveaway2021'/>
    <img src={pic9} alt= 'toy giveaway 2021'/>
    <img src={pic10} alt='toy giveaway 2021'/>
    <img src={pic11} alt='toy giveaway 2021'/>
    <img src={pic12} alt = 'toy giveaway 2021'/>
    <img src={pic13} alt = 'do something toy giveaway'/>
       <img src= {pic21}alt= 'do something'/>
       <img src= {pic36}alt= 'do something'/>
       <img src= {pic37}alt= 'do something'/>
       <img src= {pic46}alt= 'do something'/>
       <img src= {pic48}alt= 'do something'/>
  </div>
  <div className={styles.column}>
    <img src={pic14} alt= 'do something toy giveaway'/>
    <img src={pic15} alt ='do something 2021'/>
    <img src={pic16} al= 'do something production club'/>
    <img src={pic17} alt = 'production club do something '/>
    <img src={pic18} al= 'do somethning toy drive'/>
    <img src={pic19} alt= 'do something toy drive'/>
    <img src={pic20} alt= 'do something toy drive'/>
      <img src={pic29} alt= ''/>
      <img src={pic30} alt= ''/>
      <img src={pic31} alt= ''/>
      <img src={pic35} alt= ''/>
      <img src={pic42} alt= ''/>
      <img src={pic43} alt= ''/>
      <img src={pic44} alt= ''/>
  </div>
  <div className={styles.column}>
    <img src={pic22} alt=''/>
    <img src={pic23} alt=''/>
    <img src={pic24} alt=''/>
    <img src= {pic25} alt=''/>
    <img src={pic26} alt=''/>
      <img src= {pic27} alt='' />
    <img src={pic28} alt=''/>
    <img src={pic32} alt=''/>
    <img src={pic33} alt=''/>
    <img src={pic34} alt=''/>
    <img src={pic40} alt=''/>
    <img src={pic41} alt=''/>
    <img src={pic45} alt=''/>
      <img src={pic49} alt= ''/>
  </div> 
</div>
   </SRLWrapper>
        </SimpleReactLightbox>
   </div>
    </div>
  )
}

export default Gallery
