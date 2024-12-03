import { category_2, category_3, category_4, category_5, category_6, category_img } from '../assets/home/index'
import '../styles/categoriesStyles.css'

const Categories = () => {
  return (
    <main className='category-cls'>
    <h1>Order.uk Popular Categories 🤩</h1>
    <section className='category-cards'>
      <section className='category-card'>
      <img src={category_img} alt="catgory-img"/>
      <div className='category-content'>
        <p>Burgers & Fast food</p>
        <p className='res-no'>21 Restaurants</p>
      </div>
      </section>

      <section className='category-card'>
      <img src={category_2} alt="catgory-img"/>
      <div className='category-content'>
        <p>Burgers & Fast food</p>
        <p className='res-no'>21 Restaurants</p>
      </div>
      </section>

      <section className='category-card'>
      <img src={category_3} alt="catgory-img"/>
      <div className='category-content'>
        <p>Burgers & Fast food</p>
        <p className='res-no'>21 Restaurants</p>
      </div>
      </section>

      <section className='category-card'>
      <img src={category_4} alt="catgory-img"/>
      <div className='category-content'>
        <p>Burgers & Fast food</p>
        <p className='res-no'>21 Restaurants</p>
      </div>
      </section>

      <section className='category-card'>
      <img src={category_5} alt="catgory-img"/>
      <div className='category-content'>
        <p>Burgers & Fast food</p>
        <p className='res-no'>21 Restaurants</p>
      </div>
      </section>

      <section className='category-card'>
      <img src={category_6} alt="catgory-img"/>
      <div className='category-content'>
        <p>Burgers & Fast food</p>
        <p className='res-no'>21 Restaurants</p>
      </div>
      </section>
    </section>
    </main>
  )
}

export default Categories
