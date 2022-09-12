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
    <div className={styles.ModalLogin}>
      <div className={styles.content}>
        <h2 className={styles.welcome}>WELCOME to MOVIE DB!</h2>
        <form className={styles.form} onSubmit={onGetUsername}>
          <input
            placeholder="Type your name here and continue..."
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className={styles.input}
            type="text"
            required
          />
          <Button
            type="submit"
            color="red"
            btnTextContent="Continue"
            className={styles.button}
          />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
