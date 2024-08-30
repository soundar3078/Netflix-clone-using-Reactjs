import React from 'react'
import './footer.css'
import yt_jpg from '../../assets/yticon.png'
import twi_jpg from '../../assets/twittericon.png'
import fb_jpg from '../../assets/fbicon.png'
import insta_jpg from '../../assets/instaicon.png'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footeritems">
      <img src={fb_jpg} alt=""/>
      <img src={insta_jpg} alt="" />
      <img src={twi_jpg} alt="" />
      <img src={yt_jpg} alt="" />
    </div>
    <ul>
      <li>Help centre</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Contact Us</li>
    </ul>
    <p className="copyrighttext">© 2024-2056 Netflix,Inc</p>
    </div>
  )
}

export default Footer