/* eslint-disable react/prop-types */
import '../styles/navbarStyles.css';
import { logo } from '../assets/login';
import { user } from '../assets/home';

const Navbar = ({ showBrowseMenu = true }) => {

  const selectedBtn = {
    padding: '.5rem',
    width: '7rem',
    height: '2.5rem',
    borderRadius: '2rem',
    backgroundColor: '#FC8A06',
    color: 'white',
    fontSize: '12px',
  };

  return (
    <nav className="navbar-cls">
      <img className="logo-cls" src={logo} alt="logo" />
      <div className="menu-cls">
        <button
          style={selectedBtn}
          className="menu-btn"
        >
          Home
        </button>
        {showBrowseMenu && <button className="menu-btn">Browse Menu</button>}
        <button className="menu-btn">Special Offers</button>
        <button className="menu-btn">Restaurants</button>
        <button
          style={selectedBtn}
          className="menu-btn"
        >
          Restaurants
        </button>
        <button className="login-btn" 
        >
          <img src={user} alt="profile" />
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
