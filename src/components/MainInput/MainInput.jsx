import { useState, useEffect, useRef } from "react";
import "./index.scss";

const MainInput = ({ setInputMovie }) => {
  const inputRef = useRef(null);

  const [isInputVisible, setInputVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 900
        ? setInputVisibility(true)
        : setInputVisibility(false)
    );

    // console.log(inputRef.current.value)
    // inputRef.current.focus()
  }, []);

  const onHandleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setInputMovie(e.target[0].value);
  };

  return (
    <form className="MainInput" onSubmit={onHandleSubmit}>
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
