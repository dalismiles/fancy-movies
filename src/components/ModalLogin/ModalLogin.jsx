import { useState } from "react";
import Button from "../Button";
import "./index.scss";

const ModalLogin = ({ onHandleClick }) => {
  const [usernameInput, setUsernameInput] = useState("");

  const onGetUsername = () => {
    localStorage.setItem("username", usernameInput);
    onHandleClick(false);
  };

  return (
    <div className="ModalLogin__overlay">
      <div className="ModalLogin__overlay--content">
        <h2 className="ModalLogin__overlay--content--typewriter">
          WELCOME to MOVIE DB!
        </h2>
        <form
          className="ModalLogin__overlay--content--form"
          onSubmit={onGetUsername}
        >
          <label htmlFor="">Type your name here and continue...</label>
          <input
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="ModalLogin__form--input"
            type="text"
            required
          />
          <Button
            type="submit"
            color="lightseagreen"
            btnTextContent="Continue"
            className="ModalLogin__button"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
