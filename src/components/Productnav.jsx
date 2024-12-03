import '../styles/productnavStyles.css'
import { logo } from '../assets/login'
import { user } from '../assets/home'

const selectedBtn = {
  padding: "2% 1rem",
    width: "9rem",
    height: "3rem",
    borderRadius: "2rem",
    backgroundColor: "#FC8A06",
    color: "white",
    fontSize: "12px"
}

const Productnav = () => {
  return (
    <nav className="product-navbar-cls">
      <img className='product-logo-cls' src={logo} alt='logo'/>
      <div className='menu-cls'>
        <button className='product-menu-btn'>Home</button>
        <button className='product-menu-btn'>Special Offers</button>
        <button id='selected-btn' style={selectedBtn}>Restaurants</button>
        <button className='product-menu-btn'>Track Order</button>
        <button className='product-login-btn'>
          <img src={user} alt='profile'/>
          Hey Mike
        </button>
      </div>
    </nav>
  )
}

export default Productnav
