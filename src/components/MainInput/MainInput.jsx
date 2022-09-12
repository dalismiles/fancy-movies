import { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";

const MainInput = ({ setInputValue }) => {
  const inputRef = useRef(null);

  const [isInputVisible, setInputVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 880
        ? setInputVisibility(true)
        : setInputVisibility(false)
    );
  }, []);

  const onHandleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setInputValue(e.target[0].value);
  };

  return (
    <form className={styles.MainInput} onSubmit={onHandleSubmit}>
      {isInputVisible && (
        <>
          <input ref={inputRef} type="text" />
          <button type="submit">Search</button>
        </>
      )}
    </form>
  );
};

export default MainInput;
