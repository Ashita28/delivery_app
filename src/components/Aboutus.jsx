import '../styles/aboutusStyles.css'
import { bell, food_aboutus, order_aboutus } from '../assets/home'

const Aboutus = () => {
  return (
    <main className='aboutus-cls'>
      <section className='about-us'>
      <section className='knowus-bar'>
        <h1>Know more about us!</h1>
        <div className='about-queries-menu'>
          <button id='selected-query'>Frequent Questions</button>
          <button className='other-query-options'>Who we are?</button>
          <button className='other-query-options'>Partner Program</button>
          <button className='other-query-options'>Help & Support</button>
        </div>
      </section>
      <section className='about-sub-sec'>
        <section className='queries'>
            <p id='highlighted-query'>How does Order.UK work?</p>
            <p>What payment methods are accepted?</p>
            <p>Can I track my order in real-time?</p>
            <p>Are there any special discounts or<br/>
            promotions available?</p>
            <p>Is Order.UK available in my area?</p>
        </section>
        <section className='more-about-us'>
          <section className='aboutus-order'>
            <div className='about-card'>
              <h5>Place an Order!</h5>
              <img src={bell} alt='bell'/>
              <p>Place order through our<br/>
              website or Mobile app</p>
            </div>
            <div className='about-card'>
              <h5>Track Progress</h5>
              <img src={food_aboutus} alt='food'/>
              <p>Your can track your order<br/>
              status with delivery time</p>
            </div>
            <div className='about-card' id='deliver-card'>
              <h5>Get your Order!</h5>
              <img src={order_aboutus} alt='deliverd'/>
              <p>Receive your order at a<br/>
              lighting fast speed!</p>
            </div>
          </section>
            <p className='end-heading'>Order.UK simplifies the food ordering process. Browse through our diverse menu,<br/>
             select your favorite dishes, and proceed to checkout. Your delicious meal will be<br/>
              on its way to your doorstep in no time!</p>
        </section>
      </section>
      </section>
    </main>
  )
}

export default Aboutus
