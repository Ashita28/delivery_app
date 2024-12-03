/* eslint-disable react/no-unescaped-entities */
import { home_p1, home_p2, home_subbg } from '../assets/home'
import '../styles/herosecStyles.css'
import { logo }  from '../assets/login/index'

const HeroSection = () => {
  return (
    <main className='herosection'>
      <section className='sub-sec1'>
      <div>
        <p className='sub-heading1'>Order Restaurant food, takeaway and groceries.</p>
        <h1 className='sub-heading2'>Feast Your Senses,<br/>
        Fast and Fresh</h1>
        <p className='sub-heading3'>Enter a postcode to see what we deliver</p>
        <div className='search-cls'>
        <div><p>e.g. EC4R 3TE</p></div>
        <button>Search</button>
        </div>
        </div>
        <section className='sub-bg'>
        <img className='subbg-img' src={home_subbg} alt='sub-bg'/>
        <div className='person-img-cls'>
        <img className='person1-img' src={home_p1} alt='p1'/>
        <img className='person2-img' src={home_p2} alt='p2'/>
        </div>
      </section>

      <section className='num-highlight'>
      <p id='num1'>1</p>
      <p id='num2'>2</p>
      <p id='num3'>3</p>
      </section>

      
      <section className='notification-cards'>


      <section className='notification-card1'>
        <div className='noti-sub-sec'>
          <img src={logo} alt='logo'/>
          <p style={{color: "gray"}}>now</p>
        </div>

        <div>
          <h6>We’ve Received your order!</h6>
          <p>Awaiting Restaurant acceptance </p>
        </div>
      </section>


      <section className='notification-card2'>

        <div className='noti-sub-sec'>
          <img src={logo} alt='logo'/>
          <p style={{color: "gray"}}>now</p>
        </div>

        <div>
            <h6>Order Accepted! <span><img/></span></h6>
          <p>Your order will be delivered shortly</p>
        </div>
      </section>


      <section className='notification-card3'>
        <div className='noti-sub-sec'>
          <img src={logo} alt='logo'/>
          <p style={{color: "gray"}}>now</p>
        </div>

        <div>
          <h6>Your rider's near by</h6>
          <p>They're almost there- get ready!</p>
        </div>
      </section>
      </section>
      </section>
    </main>
  )
}

export default HeroSection
