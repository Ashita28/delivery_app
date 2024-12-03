import { success } from '../assets/payment';
import '../styles/ordersuccessStyles.css';

const OrderSuccess = () => {
  return (
    <main className="order-successful">
      <div className="image-container">
        <img src={success} alt="successful-order" />
      </div>

      <section className="success-sub-sec1">
        <h1>Order Placed Successfully</h1>
        <p>
          Your order is confirmed and on its way. Get set to savor your chosen
          delights!
        </p>
      </section>

      <section className="success-sub-sec2">
        <div>
          <p>Royal Cheese Burger</p>
          <p>Potato Veggies</p>
          <p>Coke Coca Cola</p>
        </div>
        <button>Back to Home</button>
      </section>
    </main>
  );
};

export default OrderSuccess;
