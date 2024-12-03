import { checkout_fwd, collection, coupon_img, del_item, free_item, scooter, share_cart } from '../assets/product';
import '../styles/basketcardStyles.css';
import {cart} from '../assets/home/index'

const BasketCard = () => {
  return (
    <main className="basket-card">

      <section className="share-cls">
        <img src={share_cart} alt="share"/>
        <p>Share this cart<br/> 
        with your friends</p>
        <button>Copy Link</button>
      </section>

      <section className='cart'>
      <div className='cart-cls'>
            <img src={cart} alt='cart'/>
            My Basket
          </div>
      <section className="basket-cls">
        <section className="purchase-list">
          <div className='product-added-card'>
            <div className='item-qnt'><p>1x</p></div>
          <div className='added-item'>
            <h5>₹120</h5>
            <h6>Royal Cheese Burger</h6>
            <p>With extra fries</p>
          </div>
          <img src={del_item} alt='del'/>
          </div>

          <section className="total-pay-cls">
            <div className='sub-total'>
            <h6>Sub Total: </h6>
            <p>₹230.00</p>
            </div>

            <div className='sub-total'>
            <h6>Discounts:</h6>
            <p>-₹3.00</p>
            </div>

            <div className='sub-total'>
            <h6>Delivery Fee:</h6>
            <p>₹3.00</p>
            </div>
          </section>
          <section className='to-pay-cls'>
            <div className='to-pay' id='to-pay-sec1'>
              <h6>Total to pay</h6>
              <p>₹230.00</p>
            </div>

            <div className='to-pay-btn'>
            <button>
            Choose your free item..
            </button>
            <img src={free_item} alt='free-item'/>
            </div>

            <div className='to-pay-btn'>
            <button>
            Apply Coupon Code here
            </button>
            <img src={coupon_img} alt='coupon'/>
            </div>
          </section>

        <section className="checkout-cls">

          <div className='checkout'>
          <div id='item-delivery'>
            <img src={scooter} alt='delivery'/>
            <h6>Delivery</h6>
            <p>Starts at 17:50</p>
          </div>

          <div id='collection-cls'>
            <img src={collection} alt='collection'/>
            <h6>Collection</h6>
            <p>Starts at 16:50</p>
          </div>
          </div>

          <div id='checkout-btn'>
            <img src={checkout_fwd} alt='checkout'/>
            <button>Checkout!</button>
          </div>
        </section>
        </section>
        </section>
        </section>
    </main>
  )
}

export default BasketCard
