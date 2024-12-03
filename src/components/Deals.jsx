import { deal_food, deal_img2 } from '../assets/home'
import '../styles/dealsStyles.css'

const Deals = () => {
  return (
    <main>
    <section className='deals-cls'>
      <h1>Up to -40% 🎊 Order.uk exclusive deals</h1>
      <section className='sub-dealbar'>
        <button className='option-btn'>Vegan</button>
        <button className='option-btn'>Sushi</button>
        <button className='selected-option'> Pizza & Fast food </button>
        <button className='option-btn'>others</button>
      </section>
    </section>
    <section className='deals-cards'>



      <section className='deals-card'>
      <div className='food-cls'>
        <img src={deal_food} alt='food deal'/>
        <div className='card-txt'>
        <p id='heading'>Restaurant</p>
        <p id='heading-sub'>Chef Burgers London</p>
        </div>
        <div className='discount-cls'><p>-40%</p></div>
      </div>
      </section>


      <section className='deals-card'>
      <div className='food-cls'>
        <img src={deal_img2} alt='food deal'/>
        <div className='card-txt'>
        <p id='heading'>Restaurant</p>
        <p id='heading-sub'>Chef Burgers London</p>
        </div>
        <div className='discount-cls'><p>-40%</p></div>
      </div>
      </section>


      <section className='deals-card'>
      <div className='food-cls'>
        <img src={deal_food} alt='food deal'/>
        <div className='card-txt'>
        <p id='heading'>Restaurant</p>
        <p id='heading-sub'>Chef Burgers London</p>
        </div>
        <div className='discount-cls'><p>-40%</p></div>
      </div>
      </section>
    </section>
    </main>
  )
}

export default Deals
