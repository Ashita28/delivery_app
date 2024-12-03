import '../styles/editcardStyles.css'

const Editcard = () => {
  return (
    <main className="edit-payment-card">
      <section className="form-edit-paycard">
        <h1>Edit Payment Method</h1>

        <form className="card-edit-fields">
            <div className="sub-card-edit">
                <label htmlFor='card-no'>Card Number</label>
                <div id='card-no'>
                <input 
                placeholder="XXXX XXXX XXXX"/>
                    <span>1234</span>
                </div>
            </div>

            <div className="sub-card-edit2">
            <label htmlFor='exp-date'>Expiration</label>
            
            <div id='exp-date'>
            <input
            />
            <span>11/26</span>
            </div>

            </div>

            <div className="sub-card-edit">
            <label htmlFor='cvc'>CVC</label>
                <input 
                id='cvc'
                    placeholder="XXX"
                />
            </div>

            <div className="sub-card-edit2">
            <label htmlFor='name-on-card'>Name on Card</label>
                <div id='name-on-card'>
                <input
                />
                <span>Mike Ross</span>
                </div>
            </div>
        </form>

        <section className='edit-form-options'>
            <button id='edit-form-btn1'>Remove</button>

            <div className='cancel-save-btns'>
            <button id='edit-form-btn2'>Cancel</button>
            <button id='edit-form-btn3'>Save Changes</button>
            </div>
            
        </section>
      </section>
    </main>
  )
}

export default Editcard
