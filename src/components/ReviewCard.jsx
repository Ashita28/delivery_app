/* eslint-disable react/no-unescaped-entities */

import { back_review, fwd_review, rating, review_dp, review_time, stars } from '../assets/product'
import '../styles/reviewStyles.css'

const ReviewCard = () => {
  return (
    <main className='reviews-cls'>
      <section className='top-sec'>
      <h1>Customer Reviews</h1>
      <div className='back-fwd-btn'>
      <div className='review-btns'>
        <img src={back_review} alt='back'/>
        </div>
        <div className='review-btns'>
        <img src={fwd_review} alt='fwd'/>
        </div>
      </div>
      </section>
      <section className='review-cards-cls'>
      <section className='review-card'>
        <div className='review-card-content'>
          <div className='review-title'>
            <div className='mini-sec' id='mini-sec1'>
            <img id='review_dp' src={review_dp} alt='dp'/>
            <div id='review-name-place'>
            <h6>St Glx</h6>
            <p>South London</p>
            </div>
            </div>
            <div className='mini-sec' id='mini-sec2'>
              <img id='stars' src={stars} alt="stars"/>
              <div id='review-sub-min'>
                <img id='review_time' src={review_time} alt="clock"/>
                <p>24th September, 2023</p>
              </div>
              </div>
              </div>
              <p id='review'>The positive aspect was undoubtedly the efficiency of the service.
               The queue moved quickly, the staff was friendly, 
               and the food was up to the usual McDonald's standard – hot and 
               satisfying.</p>
            </div>
            </section>
      </section>
      <img id="overall-rating" src={rating} alt="rating"/>
    </main>
  )
}

export default ReviewCard
