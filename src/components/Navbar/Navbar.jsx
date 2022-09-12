import { useState } from "react";
import { FaCaretSquareRight } from "react-icons/fa";
import ModalLogin from "../ModalLogin";

import styles from "./index.module.scss";

const Navbar = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const removeUsername = () => {
    localStorage.removeItem("username");
  };

  return (
    <div className={styles.Navbar}>
      <p>
        <FaCaretSquareRight /> DBMOVIE
      </p>
      <div className={styles.menupages}>
        <a href="#">Movies</a>
        <a href="#">Tv Show</a>
        <a href="#movie-entity">Search</a>
      </div>
      <div className={styles.menuLogOut}>
        <a
          onClick={() => setModalVisibility(true)}
          className={styles.profileSettings}
        >
          LogIn/Settings
        </a>
        <a className={styles.account}>
          <b>HELLO {localStorage.getItem("username") || "anonymous"} !</b>
        </a>
        <a
          onClick={() => setModalVisibility(true) && removeUsername(true)}
          className={styles.logOut}
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
