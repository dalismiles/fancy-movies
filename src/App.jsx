import React, { useState, createContext } from "react";

import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher/";

import styles from "./App.module.scss";

const theme = {
  lightMode: {
    background: "#fff" ,
    color: "#1b1b1b",
  },
  darkMode: {
    background: "#1b1b1b",
    color: "#fff",
  },
};

export const ThemeContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const [isDarkMode, setDarkMode] = useState(false);

  const darkModeStuff = {
    isDarkMode,
    setDarkMode,
  };

  return (
    <div
      className={styles.App}
      style={isDarkMode ? theme.darkMode : theme.lightMode}
    >
      <ThemeContext.Provider value={darkModeStuff}>
        <Navbar />
        <ThemeSwitcher />
        <MainInput setInputValue={setInputValue} />
        <MainSection />
        <MovieEntity movieID={inputValue || "372058"} />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
