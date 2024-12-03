import { useState } from "react";
import "../styles/profileStyles.css";
import Topbar from "../components/Topbar";
import Productnav from "../components/Productnav";
import { add_card, card, edit, profile_pic } from "../assets/profile";
import { back_arrow } from "../assets/checkout";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  return (
    <main>
      <Topbar />
      <section className="profile-bar">
        <Productnav />
      </section>

      <section className="profile-page-heading">
        <img src={back_arrow} alt="backward" />
        <h1>My Profile</h1>
      </section>

      <section className="profile-pic-sec">
        <section className="profile">
          <img src={profile_pic} alt="dp" />
          <h1>Mike Ross</h1>
        </section>
        <button onClick={handleEditClick}>
          {isEditable ? "Save" : "Edit"}
        </button>
      </section>

      <form className="edit-profile-form">
        <section className="profile-form-sec">
          <div>
            <label>Full Name</label>
            <input
              placeholder="Mike Ross"
              disabled={!isEditable}
              className={isEditable ? "editable" : ""}
            />
          </div>

          <div>
            <label>Gender</label>
            <input
              placeholder="Male"
              disabled={!isEditable}
              className={isEditable ? "editable" : ""}
            />
          </div>
        </section>

        <section className="profile-form-sec">
          <div>
            <label>Email Address</label>
            <input
              placeholder="mikeross@gmail.com"
              disabled={!isEditable}
              className={isEditable ? "editable" : ""}
            />
          </div>

          <div>
            <label>Country</label>
            <input
              placeholder="India"
              disabled={!isEditable}
              className={isEditable ? "editable" : ""}
            />
          </div>
        </section>
      </form>

      <hr />

      <section className="saved-payment-methods">
        <p className="saved-cards-heading">Saved Payment Methods</p>

        <section className="paycards-lists">
          <section className="paycard">
            <div className="paycard-info">
              <div className="paycard-bg">
                <img src={card} alt="card" />
              </div>
              <div>
                <h6>xxxx xxxx xxxx 1234</h6>
                <p>Mike Ross</p>
              </div>
            </div>
            <img className="edit-paycard" src={edit} alt="edit" />
          </section>

          <section className="new-paycard">
            <div className="paycard-bg">
              <img src={add_card} alt="add-card" />
            </div>
            <p>Add New Card</p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Profile;
