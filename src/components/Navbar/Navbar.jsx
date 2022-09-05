import { useState } from "react";
import ModalLogin from "../ModalLogin";
import "./index.scss";

const Navbar = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const removeUsername = () => {
    localStorage.removeItem("username");
  };

  return (
    <div className="Navbar">
      <div className="Navbar__menu--pages">
        <a href="#">Movies</a>
        <a href="#">Tv Show</a>
        <a href="#movie-entity">Search</a>
      </div>
      <div className="Navbar__menu--logout">
        <a onClick={() => setModalVisibility(true)} className="profileSettings">
          LogIn/Settings
        </a>
        <a className="account">
          <b>HELLO {localStorage.getItem("username") || "anonymous"} !</b>
        </a>
        <a
          onClick={() => setModalVisibility(true) && removeUsername(true)}
          className="logOut"
        >
          Log Out
        </a>
        {isModalVisible && (
          <ModalLogin setModalVisibility={setModalVisibility} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
