import React, {useState, useEffect} from 'react';
import { Storage } from 'aws-amplify' 
import styles from '../Gallery.module.css'
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'
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
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/1-_DSF4822.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/10-_DSF4852.jpg'alt= 'Toy Giveaway 2021'/>
  <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/11-_DSF4853.jpg'alt= 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/12-_DSF4854.jpg' alt= 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/13-_DSF4855.jpg' alt= 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/14-_DSF4868.jpg' alt= 'Toy Giveaway 2021'/>
  <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/15-_DSF4877.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/16-_DSF4878.jpg'alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/17-_DSF4880.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/18-_DSF4883.jpg' alt='Toy Giveaway 2021'/>
  </div>
   <div className={styles.column}>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/19-_DSF4884.jpg' alt = 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/2-_DSF4827.jpg'alt= 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/20-_DSF4889.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/21-_DSF4898.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/22-_DSF4901.jpg' alt = 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/23-_DSF4902.jpg' alt = 'Toy Giveaway 2021'/>
       <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/24-_DSF4910.jpg' alt= 'Toy Giveaway 2021'/>
       <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/25-_DSF4917.jpg'alt= 'Toy Giveaway 2021'/>
       <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/26-_DSF4919.jpg' alt= 'Toy Giveaway 2021'/>
       <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/27-_DSF4921.jpg' alt= 'Toy Giveaway 2021'/>
       <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/28-_DSF4926.jpg' alt= 'Toy Giveaway 2021'/>
  </div>
  <div className={styles.column}>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/29-_DSF4929.jpg' alt= 'Toy Giveaway 2021'/>
    <img src= 'https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/3-IMG_6317.jpg'alt ='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/30-_DSF4932.jpg' alt= 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/31-_0002661.jpg' alt = 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/32-_0002663.jpg' alt= 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/33-_0002667.jpg' alt= 'Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/34-_0002672.jpg' alt= 'Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/35-_0002680.jpg' alt= 'Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/36-_0002694.jpg' alt= 'Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/37-_0002728.jpg' alt= 'Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/38-_0002732.jpg' alt= 'Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/39-_0002746.jpg' alt= 'Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/4-_DSF4828.jpg' alt= 'Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/40-_0002766.jpg' alt= 'Toy Giveaway 2021'/>
  </div>
  <div className={styles.column}>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/41-_0002787.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/42-_0002790.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/43-_0002810.jpg' alt='Toy Giveaway 2021'/>
    <img src= 'https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/44-_0002817.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/45-_0002830.jpg' alt='Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/46-_0002850.jpg'  alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/47-IMG_6360.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/48-IMG_6364.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/49-IMG_6380.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/5-_DSF4830.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/6-_DSF4839.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/7-_DSF4840.jpg' alt='Toy Giveaway 2021'/>
    <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/8-_DSF4843.jpg' alt='Toy Giveaway 2021'/>
      <img src='https://toydrivea7b76144b859406b9de6f579699fd99d133655-dev.s3.us-west-1.amazonaws.com/9-_DSF4846.jpg' alt= 'Toy Giveaway 2021'/>
  </div> 
</div>
   </SRLWrapper>
        </SimpleReactLightbox>
   </div>
    </div>
  )
}

export default Gallery 

// export default function Gallery(){

// const [images, setImages]= useState([])

// useEffect(()=> {
//   fetchImages()
// }, [])

// async function fetchImages(){
//   let imageKeys = await Storage.list('')
//   imageKeys= await Promise.all(imageKeys.map(async k => {
//   const signedUrl = await Storage.get(k.key)
//   return signedUrl
//   }))
//   console.log('imageKeys:', imageKeys)
//   setImages(imageKeys)

// }
// return(
//     <div className={styles.galleryWrapper}>
//       <h1>gallery</h1>
//       {
//       images.map(image =>(
//         <img src={image} key={image} style={{width:300}}/>
//         ))
//       }
//     </div>
//   )
// }



