import { add_img, product_card1 } from '../assets/product'
import '../styles/productcardStyles.css'

const ProductCard = () => {
  return (
    <main className='products-cards'>
      <section className='product-card'>
      <div className='product-card-cls'>
        <img src={product_card1} alt='product-card'/>
        <div className='product-card-details'>
        <div className='product-card-txt'>
        <p id='product-heading'>McDonald’s East London</p>
        <p id='product-heading-sub'>First Order Discount</p>
        </div>
        <div className='product-add'>
        <img id='product-add-img' src={add_img} alt='add'/>
        </div>
        </div>
        <div className='product-discount-cls'><p>-20%</p></div>
      </div>
    </section>

    <section className='product-card'>
      <div className='product-card-cls'>
        <img src={product_card1} alt='product-card'/>
        <div className='product-card-details'>
        <div className='product-card-txt'>
        <p id='product-heading'>McDonald’s East London</p>
        <p id='product-heading-sub'>First Order Discount</p>
        </div>
        <div className='product-add'>
        <img id='product-add-img' src={add_img} alt='add'/>
        </div>
        </div>
        <div className='product-discount-cls'><p>-20%</p></div>
      </div>
    </section>

    <section className='product-card'>
      <div className='product-card-cls'>
        <img src={product_card1} alt='product-card'/>
        <div className='product-card-details'>
        <div className='product-card-txt'>
        <p id='product-heading'>McDonald’s East London</p>
        <p id='product-heading-sub'>First Order Discount</p>
        </div>
        <div className='product-add'>
        <img id='product-add-img' src={add_img} alt='add'/>
        </div>
        </div>
        <div className='product-discount-cls'><p>-20%</p></div>
      </div>
    </section>
    </main>
  )
}

export default ProductCard
