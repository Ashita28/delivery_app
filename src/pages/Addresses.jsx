import Productnav from '../components/Productnav'
import Topbar from '../components/Topbar'
import { add_address, back_arrow, default_add } from "../assets/checkout"
import '../styles/addressesStyles.css'

const Addresses = () => {
  return (
    <main >
    <Topbar/>
    <section className='product-nav'>
    <Productnav/>
    </section>
    <section className='addresses-cls'>
          <img src={back_arrow} alt="back"/>
          <h1>Your Addresses</h1>
        </section>


        <section className='address-cards'>
            <section className='add-address-card'>
                <img src={add_address} alt='add address'/>
                <p>Add Address</p>
            </section>

                <section className='default-address-card'>
                    <div className='p-name'>
                        <h6>Mike Ross</h6>
                        <img src={default_add} alt='default address'/>
                    </div>

                    <div className='address-contact'>
                        <p>45, Green Street, Sector 12,
                        New Delhi, 110001, India</p>
                        <p>Phone Number: 8734637468</p>
                    </div>

                    <div className='edit'>
                        <p className='side-border'>Edit</p>
                        <p>Remove</p>
                    </div>
                </section>


                <section className='additional-address-card'>
                    <div className='p-name'>
                        <h6>Mike Ross</h6>
                    </div>

                    <div className='address-contact'>
                        <p>Office 704, Tower B, Techno Plaza,
                        Bengaluru, Karnataka, 560100
                        India</p>
                        <p>Phone Number: 8734637468</p>
                    </div>

                    <div className='edit'>
                        <p className='side-border'>Edit</p>
                        <p>Remove</p>
                    </div>
                </section>
            </section>
    </main>
  )
}

export default Addresses
