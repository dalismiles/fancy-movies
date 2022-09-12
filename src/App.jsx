import React, { useState } from "react";

import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import styles from "./App.module.scss";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.App}>
      <Navbar />
      <MainInput setInputValue={setInputValue} />
      <MainSection />
      <MovieEntity movieID={inputValue || "372058"} />
      <Footer />
    </div>
  );
}

export default App;
