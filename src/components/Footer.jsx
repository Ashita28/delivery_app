import '../styles/footerStyles.css'
import {bw_logo, app_store, play_store, fb, insta, tiktok, snap} from '../assets/footer/index.js'

const Footer = () => {
  return (
    <footer className='footer'>
    <section className='mainfooter'>
      <div>
      <img className='logo-cls' src={bw_logo} alt='logo'/>
      <div className='stores'>
        <div className='appstore-cls'>
        <img className='appstore-img' src={app_store} alt='app store'/>
        </div>
        <div className='playstore-cls'>
        <img className='playstore-img' src={play_store} alt='play store'/>
        </div>
      </div>
      <p style={{marginTop: "1rem"}}>Company # 490039-445, Registered with <br/>
      House of companies.</p>
      </div>
      <div className='col1'>
        <p className='col1-heading'>Get Exclusive Deals in your Inbox</p>
        <div className='subscribe-cls'>
        <input type='text' placeholder='youremail@gmail.com'/>
        <button>Subscribe</button>
        </div>
        <p>we wont spam, read our <u>email policy</u></p>
        <img className='connect' src={fb} alt='fb'/>
        <img className='connect' src={insta} alt='insta'/>
        <img className='connect' src={tiktok} alt='tiktok'/>
        <img className='connect' src={snap} alt='snap'/>
      </div>
      <div className='col2'>
      <p>Legal Pages</p>
        <ul>
          <li>Terms and conditions</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Modern Slavery Statement</li>
        </ul>
      </div>
      <div className='col2'>
      <p>Important Links</p>
        <ul>
          <li>Get help</li>
          <li>Add your restaurant</li>
          <li>Sign up to deliver</li>
          <li>Create a business account</li>
        </ul>
      </div>
    </section>
    <section className='subfooter'>
      <div className='subcol1'><p>Order.uk Copyright 2024, All Rights Reserved.</p></div>
      <div className='subcol2'>
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Pricing</p>
        <p>Do not sell or share my personal information</p>
      </div>
    </section>
    </footer>
  )
}

export default Footer
