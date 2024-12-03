import { mcd, r2, r3, r4, r5, r6 } from '../assets/home/index'
import '../styles/restaurantsStyles.css'

const Restaurants = () => {
  return (
    <main className='res-cards-cls'>
    <section className='res-cards'>
      <section className='res-card'>
      <img src={mcd} alt="res-img"/>
      <p>McDonald’s London</p>
      </section>

      <section className='res-card'>
      <img src={r2} alt="res-img"/>
      <p>Papa Johns</p>
      </section>

      <section className='res-card'>
      <img src={r3} alt="res-img"/>
      <p>KFC West London</p>
      </section>

      <section className='res-card'>
      <img src={r4} alt="res-img"/>
      <p>Texas Chicken</p>
      </section>

      <section className='res-card'>
      <img src={r5} alt="res-img"/>
      <p>Burger King</p>
      </section>

      <section className='res-card'>
      <img src={r6} alt="res-img"/>
      <p>Shaurma 1</p>
      </section>
    </section>
    </main>
  )
}

export default Restaurants
