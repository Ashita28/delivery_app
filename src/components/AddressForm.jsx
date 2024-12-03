import { useState } from "react";
import { location_img } from "../assets/checkout";
import "../styles/addressformStyles.css";

const AddressForm = () => {
  const [selectedState, setSelectedState] = useState("");

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <main className="address-form-cls">
      <form className="address-form">
        <label>
          <img src={location_img} alt="location" />
          Add Address
        </label>

        <section className="form-fields">
          {/* State Dropdown Menu */}
          <div className="state-menu">
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="" disabled>
                State
              </option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <input placeholder="City/District" />
          <input placeholder="PIN Code" />
          <input placeholder="Phone Number" />
        </section>

        <textarea placeholder="Enter full address"></textarea>
        <div className="save-address-btn">
          <button>Save</button>
        </div>
      </form>
    </main>
  );
};

export default AddressForm;
