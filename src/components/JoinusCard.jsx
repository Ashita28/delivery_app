import React from 'react'
import { partner_with_us, ride_with_us } from '../assets/home'
import '../styles/joinusStyles.css'

const JoinusCard = () => {

  return (
    <main className='joinus-cls'>
    <section className='join-cards'>
    <section className='join-card'>
    <div className='sub-join-cls'>
        <img src={partner_with_us} alt='join us'/>
        <div className='join-txt'>
        <p className='join-heading'>Signup as a business</p>
        <p className='sub-join-heading'>Partner with us</p>
        <button>Get Started</button>
        </div>
        <div className='perks-cls'><p>Earn more with lower fees</p></div>
        </div>
    </section>


    <section className='join-card'>
    <div className='sub-join-cls'>
        <img src={ride_with_us} alt='join us'/>
        <div className='join-txt'>
        <p className='join-heading'>Signup as a rider</p>
        <p className='sub-join-heading'>Ride with us</p>
        <button>Get Started</button>
        </div>
        <div className='perks-cls'><p>Avail exclusive perks</p></div>
        </div>
    </section>
        
    </section>
    </main>
  )
}

export default JoinusCard
