/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar"
import Topbar from "../components/Topbar"
import '../styles/productStyles.css'
import { burger, contract, delivery, mini_clock, order, rating, search_img, timer, tracking_img } from '../assets/product/'
import ProductCard from "../components/ProductCard"
import AboutOrder from "../components/AboutOrder"
import Map from "../components/Map"
import ReviewCard from "../components/ReviewCard"
import Restaurants from "../components/Restaurants"
import BasketCard from '../components/BasketCard'


const Product = () => {


  return (
    <main className="product-cls">
      <Topbar/>
      <Navbar showBrowseMenu={false} />
      <section className="product-herosec">
      <section className="sub-product-hero">
      <div className="product-hero-cls">
        <p>I'm lovin' it!</p>
        <h1>McDonald’s East London</h1>
        <div className="sub-product-heading">
          <div className="product-btn">
            <img src={order} alt="order"/>
            <span>Minimum Order: 12 GBP</span>
          </div>
          <div className="product-btn">
            <img src={delivery} alt="delivery"/>
            <span>Minimum Order: 12 GBP</span>
          </div>
        </div>
      </div>
        <div className="imgs">
        <img id="imgs1" src={burger} alt="burger"/>
        <img id="imgs2" src={rating} alt="rating"/>
        </div>
      </section>
      <section className="product-clock">
        <img src={mini_clock} alt="clock"/>
        <p>Open until 3:00 AM</p>
      </section>
      </section>
      <section className="sub-bar">
        <h1>All Offers from McDonald’s East London</h1>
        <div>
          <img src={search_img} alt="search"/>
          <input id="menu-search" placeholder="Search from menu..."/>
        </div>
      </section>
      <nav>
        <ul>
          <li id="selected-product-option">Offers</li>
          <li className="product-options">Burgers</li>
          <li className="product-options">Fries</li>
          <li className="product-options">Snacks</li>
          <li className="product-options">Salads</li>
          <li className="product-options">Cold drinks</li>
          <li className="product-options">Happy Meal®</li>
          <li className="product-options">Desserts</li>
          <li className="product-options">Hot drinks</li>
          <li className="product-options">Sauces</li>
          <li className="product-options">Orbit®</li>
        </ul>
      </nav>


      <section className="products-purchase-cls">

      <section className="all-products-cards-cls">
      <ProductCard/>
      <section className="product-card-heading">
      <h1 id="product-heading-cls">Burgers</h1>
      <AboutOrder/>
      </section>

      <section className="product-card-heading">
      <h1 className="product-heading-cls">Fries</h1>
      <AboutOrder/>
      </section>

      <section className="product-card-heading">
      <h1 className="product-heading-cls">Cold Drinks</h1>
      <AboutOrder/>
      </section>
      </section>

      <BasketCard/>
      
      </section>


      <section className="info">
        <div className="info-card">
        <div className="info-card-heading">
          <img src={tracking_img} alt="location"/>
          <h3>Delivery information</h3>
          </div>
        <p><span>Monday: </span>12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
        <p><span>Tuesday: </span> 8:00 AM–3:00 AM</p>
        <p><span>Wednesday: </span>8:00 AM–3:00 AM</p>
        <p><span>Thursday: </span>8:00 AM–3:00 AM</p>
        <p><span>Friday: </span>8:00 AM–3:00 AM</p>
        <p><span>Saturday: </span>8:00 AM–3:00 AM</p>
        <p><span>Sunday: </span>8:00 AM–12:00 AM</p>
        <p><span>Estimated time until delivery: </span>20 min</p>
        </div>
        <div className="info-card">
          <div className="info-card-heading">
          <img src={contract} alt="contract"/>
          <h3>Contact information</h3>
          </div>
          <p>If you have allergies or other dietary restrictions, 
          please contact the restaurant. 
          The restaurant will provide food-specific 
          information upon request.
          </p>
          <span>Phone number</span>
          <p style={{fontSize: "small"}}>+934443-43</p>
          <span>Website</span>
          <p style={{fontSize: "small"}}>http://mcdonalds.uk/</p>
        </div>
        <div className="info-card" id="operational-card">
        <div className="info-card-heading">
          <img src={timer} alt="clock"/>
          <h3>Operational Times</h3>
          </div>
        <p><span>Monday: </span>8:00 AM–3:00 AM</p>
        <p><span>Tuesday: </span>8:00 AM–3:00 AM</p>
        <p><span>Wednesday: </span>8:00 AM–3:00 AM</p>
        <p><span>Thursday: </span>8:00 AM–3:00 AM</p>
        <p><span>Friday: </span>8:00 AM–3:00 AM</p>
        <p><span>Saturday: </span>8:00 AM–3:00 AM</p>
        <p><span>Sunday: </span>8:00 AM–3:00 AM</p>
        </div>
      </section>
      <Map/>
      <ReviewCard/>
      <section className='res-cls'>
      <h1>Similar Restaurants</h1>
      <Restaurants/>
      </section>
    </main>
  )
}

export default Product
