import '../styles/homeStyles.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Deals from '../components/Deals'
import Categories from '../components/Categories'
import Restaurants from '../components/Restaurants'
import SubheroSection from '../components/SubheroSection'
import JoinusCard from '../components/JoinusCard'
import Aboutus from '../components/Aboutus'
import Topbar from '../components/Topbar'

const Home = () => {
  return (
    <main className='home-cls'>
      <Topbar />
      
      <Navbar/>
      
      <HeroSection />
      <Deals />
      <Categories />
      
      <section className='res-cls'>
        <h1>Popular Restaurants</h1>
        <Restaurants />
      </section>
      
      <SubheroSection />
      <JoinusCard />
      <Aboutus />
      
      <section className='mini-summary'>
        <div className='mini-card' id='mini-card1'>
          <h4>546+</h4>
          <p>Registered Riders</p>
        </div>
        <div className='mini-card' id='mini-card2'>
          <h4>789,900+</h4>
          <p>Orders Delivered</p>
        </div>
        <div className='mini-card' id='mini-card3'>
          <h4>690+</h4>
          <p>Restaurants Partnered</p>
        </div>
        <div className='mini-card' id='mini-card4'>
          <h4>17,457+</h4>
          <p>Food items</p>
        </div>
      </section>
    </main>
  )
}

export default Home
