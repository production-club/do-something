import React from "react";
import ty from "../images/ThankYouPhone.svg"
import typhone from '../images/ThankYouPhone.svg'
const Thankyou = () => {
  return (
    <div className="ThankyouWrapper">
  

     <img src ={ty} alt ="thank you graphic" className="tyImage" />
    <img src= {typhone} alt="thank you phone graphic" className="typhone"/>
    </div>
  );
};

export default Thankyou;
