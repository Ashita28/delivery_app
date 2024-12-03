import {cart, fwd_btn, location} from '../assets/home/index'

const Topbar = () => {
  return (
    <main className='topbar'>
        <p>🌟 Get 5% Off your first order, <span>Promo: ORDER5</span></p>
        <div className='sub-cls'>
          <div className='location-cls'>
            <img src={location} alt='location-icon'/>
            <p>Regent Street, <u>A4</u>, A4201, London <span>Change Location</span></p>
          </div>
          <button className='btn'>
          <div className='btn-img1'>
            <img src={cart} alt='cart'/>
            My cart
            </div>
            <div id='btn-img2'>
            <img src={fwd_btn} alt='forward-icon'
            />
            </div>
          </button>
          </div>
    </main>
  )
}

export default Topbar
