import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <MainInput setInputMovie={setInputValue} />
      <MovieEntity movieID={inputValue || "372058"} />
    </div>
  );
}

export default App;