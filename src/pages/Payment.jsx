import Productnav from "../components/Productnav"
import Topbar from "../components/Topbar"
import '../styles/paymentStyles.css'
import {add_payment_method, fwd_payment, mastercard, paypal, stripe, wallet} from '../assets/payment/index'
import { back_arrow } from "../assets/checkout"
import OderSuccess from "../components/OrderSuccess"


const Payment = () => {
  return (
    <main>
      <Topbar/>
      <section id="product-nav">
      <Productnav/>
      </section>

      <section className="payment-page-heading">
        <img src={back_arrow} alt="backward"/>
        <h1>Choose and Pay</h1>
      </section>

      <section className="payment-cls">

      <section className="payment-methods">

        <section className="selected-method">
          <div className="right-side">
          <div className="pic-bg">
          <img src={wallet} alt="pay-type"/>
          </div>
          <div>
            <h6>Wallet</h6>
            <p>Available balance: ₹300</p>
            </div>
          </div>
          <img className="fwd-payment" src={fwd_payment} alt="fwd"/>
        </section>

        <hr/>

        <section className="other-methods">
        <div className="pic-bg1">
        <img src={mastercard} alt="another-method"/>
        </div>
          <input id="method1" type="radio"/>
        </section>

        <section className="other-methods">
        <div className="pic-bg1">
        <img src={paypal} alt="another-method"/>
        </div>
          <input id="method1" type="radio"/>
        </section>

        <section className="other-methods">
        <div className="pic-bg1">
        <img src={stripe} alt="another-method"/>
        </div>
          <input id="method1" type="radio"/>
        </section>

        <section className="add-debit-card">
          <img src={add_payment_method} alt="add-payment-method"/>
          <h6>Add Debit Card</h6>
        </section>
      </section>

      <section className="amount">
        <div id="to-pay-cls">
          <h6>Amount to be payed</h6>
          <p>₹240</p>
        </div>
        <button className="payment-btn">Proceed Payment</button>
      </section>
      </section>

      <OderSuccess/>
      
    </main>
  )
}

export default Payment
