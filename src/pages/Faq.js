import React from 'react'
import styles from "../Faq.module.css"
import {NavLink as Link} from 'react-router-dom'
import faqpres from '../images/FAQ-presentgraphic.svg'

export default function Faq() {
  return (
    <div className= {styles.FaqWrapper}>
      <div className={styles.introFlex}>
        <div className={styles.introCopyFlex}>
        <h3> Got a question? <br/> We're here to help.</h3>
        <p>Don't see your question below? Feel free to drop us a line on our <Link to = '/contact' style={{color:'#f86149'}}> contact page</Link> or <a href ="https://www.instagram.com/toy.giveaway/" target="_blank" rel="noreferrer" style={{color:'#f86149'}}> Instagram</a>.</p>
        </div>
        <img src = {faqpres} alt= "faq present" />
      </div>
      <div className={styles.faqCopy}>
        <h3>Who is this Toy Giveaway for? </h3>
        <p>Parents who cannot afford to buy presents for their kids. However you are welcome to come with your kids.</p> 
        <h3>When and where is the event taking place?</h3>
        <p>The event is taking place on December 18th 2021, from 2PM to 10PM at 1756 Naud st, 90012.</p>
        <h3>What can I expect at the Event? </h3>
        <p>There will be Spanish & English speaking volunteers greeting you in a festive environment. You will have to wear a mask at all times. Expect long lines. There are no available restrooms, food or beverages onsite.</p>
        <h3>Do you only have toys for toddlers?</h3>
        <p>No, we have gifts for ages 0-16</p>
        <h3>For how many kids do you have toys?</h3>
        <p>We have toys for 2,200 kids and we will provide them on a first come first serve basis until we run out.</p>
        <h3>So...How can I help? </h3>
        <p> Share the flyer with people in need or organizations that could reach them. Repost the flyer on your social media, every share counts.</p>
        <h3>Can I donate toys?</h3>
        <p>Not at this event. You can however make a monetary donation at www.dosomething.club</p>
        <h3>Can I take photos or videos? </h3>
        <p>You can take photos or videos of our volunteers, the decoration, the toys, and the people you come with. Please respect the privacy of other attendees and do not take pics of them.</p>
        <h3>How can I stay up to date on details about the event?</h3>
        <p>Follow <i>@toy.giveaway</i>on Instagram</p>
        <h3>Any other questions? 
        Please email <i> toys@dosomething.club </i> or DM <i>@toy.giveaway</i> on Instagram.
    </h3>
      </div>
    </div>
  )
}
