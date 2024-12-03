import { subhero_img, subhero_img_transparent } from '../assets/home'
import { app_store, play_store } from '../assets/footer/index.js'
import { logo } from '../assets/login/index.js'
import '../styles/subherosecStyles.css'

const SubheroSection = () => {
  return (
    <main className='subhero-cls'>
      <section className='subhero-sec'>
      <div>
        <img className='subhero-img' src={subhero_img} alt='sub-bg'/>
        <img className='subhero-img-trans' src={subhero_img_transparent} alt='sub-bg'/>
        </div>
      <div>
        <div className='heading1-cls'>
            <img src={logo} alt='logo'/>
            <span>ing is more</span>
        </div>
        <div className='heading2-cls'>
        <h2><span id='highlight'>Personalised</span> <span>&</span> Instant</h2>
        <h6>Download the Order.uk app for faster ordering</h6>
        </div>
        <div className='stores-cls'>
        <div className='appstore'>
        <img className='appstore_img' src={app_store} alt='app store'/>
        </div>
        <div className='playstore'>
        <img className='playstore_img' src={play_store} alt='play store'/>
        </div>
      </div>
      </div>
      </section>
    </main>
  )
}

export default SubheroSection
