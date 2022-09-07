import { useState } from "react";
import Button from "../Button";

import styles from "./index.module.scss";

const ModalLogin = ({ onHandleClick }) => {
  const [usernameInput, setUsernameInput] = useState("");

  const onGetUsername = () => {
    localStorage.setItem("username", usernameInput);
    onHandleClick(false);
  };

  return (
    <div className={styles.ModalLoginOverlay}>
      <div className={styles.content}>
        <h2 className={styles.typewriter}>WELCOME to MOVIE DB!</h2>
        <form className={styles.form} onSubmit={onGetUsername}>
          <label htmlFor="">Type your name here and continue...</label>
          <input
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className={styles.input}
            type="text"
            required
          />
          <Button
            type="submit"
            color="lightseagreen"
            btnTextContent="Continue"
            className={styles.button}
          />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
