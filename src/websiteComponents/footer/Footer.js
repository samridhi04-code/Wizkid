import React from 'react'
import "../footer/Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className='bottom-0 end-0 start-0'>
        <div className='footer-content'>
          <h3>WizKid Academy</h3>
          <p>For any query related to our website or services kindly contact us on any of the platforms mentioned below.</p>
          <ul className='socials'>
            <li> <a href="/"> <i className='fa fa-facebook'></i></a></li>
            <li> <a href="/"> <i className='fa fa-twitter'></i></a></li>
            <li> <a href="/"> <i className='fa fa-google-plus'></i></a></li>
            <li> <a href="/"> <i className='fa fa-youtube'></i></a></li>
            <li> <a href="/"> <i className='fa fa-linkedin-square'></i></a></li>
          </ul>
        </div>
        <div className='footer-bottom'>
<p>copyright &copy;2023 Wizkid Academy</p>
        </div>
      </footer>
      </>
  )
}
