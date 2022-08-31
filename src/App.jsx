import React, { useState } from "react";

import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection/MainSection";

import "./App.css";

function App({}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <MainInput setInputMovie={setInputValue} />
      <MovieEntity movieID={inputValue || "372058"} />
      <MainSection />
    </div>
  );
}

export default App;
