import Topbar from "../components/Topbar"
import Productnav from "../components/Productnav"
import Restaurants from "../components/Restaurants"
import '../styles/checkoutStyles.css'
import { back_arrow, order_item, order_location, right_arrow } from "../assets/checkout"

const middleItem = {
   display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem",
    borderTop: "1.5px solid #202938",
    borderBottom: "1.5px solid #202938"
}

const Checkout = () => {
  return (
    <main className="checkout-page-cls">
      <Topbar/>
      <section id="product-nav">
      <Productnav/>
      </section>
      <section className="order-details-cards">
        <section id="order-page-heading">
          <img src={back_arrow} alt="back"/>
          <h1>Your Order Details</h1>
        </section>

        <section className="order-delivery">
        <section className="order-and-delivery">


          <section id="added-orders-cls">
            <section className="added-order-card">
              <div className="checkout-items">
                <img src={order_item} alt="item-pic"/>
                <div>
                <h6>Royal Cheese Burger</h6>
                <p>1x item</p>
                </div>
                </div>
              <p className="order-added-price">₹120</p>
            </section>
              <section id="middle-added-orders" style={middleItem}>
              <div className="checkout-items">
                <img src={order_item} alt="item-pic"/>
                <div>
                <h6>Royal Cheese Burger</h6>
                <p>1x item</p>
                </div>
                </div>
              <p className="order-added-price">₹120</p>
            </section>
            <section className="added-order-card">
              <div className="checkout-items">
                <img src={order_item} alt="item-pic"/>
                <div>
                <h6>Royal Cheese Burger</h6>
                <p>1x item</p>
                </div>
                </div>
              <p className="order-added-price">₹120</p>
            </section>
            <section className="order-notes">
              <label htmlFor="order-note">Notes</label>
              <input
                placeholder="Add order notes"
                id="order-note"
              />
              </section>
          </section>          
        </section>

        <section id="added-orders-delivery">
            <div className="order_location">
            <div className="order-address">
              <img src={order_location} alt="location"/>
              <div>
                <h6>Delivery Address</h6>
                <p>45, Green Street, Sector 12</p>
              </div>
              </div>
              <img className="fwd" src={right_arrow} alt="fwd"/>
            </div>

            <div className="bill-total">

            <div className="bill-desc">
              <div className="bill-details">
                <p>Items</p>
                <p><b>₹230</b></p>
              </div>

              <div className="bill-details">
                <p>Sales Tax</p>
                <p><b>₹10</b></p>
              </div>
              </div>

              <div className="bill-details">
                <h6>Subtotal (3 items)</h6>
                <p><b>₹240</b></p>
              </div>

            </div>

            <button className="payment-btn">Choose Payment Method</button>
          </section>
          </section>


      </section>


      <section className='res-cls'>
      <h1>Similar Restaurants</h1>
      <Restaurants/>
      </section>
    </main>
  )
}

export default Checkout
