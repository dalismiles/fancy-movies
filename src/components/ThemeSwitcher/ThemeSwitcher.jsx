import { useContext } from "react";
import { ThemeContext } from "../../App";

import { BsFillMoonStarsFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext);
  const onHandleClick = () => theme.setDarkMode((prev) => !prev);

  return (
    <div className="ThemeSwitcher">
      <BsFillMoonStarsFill onClick={onHandleClick} />
      <p>{"Attenzione sono la <ThemeSwitcher>"}</p>
    </div>
  );
};

export default ThemeSwitcher;
