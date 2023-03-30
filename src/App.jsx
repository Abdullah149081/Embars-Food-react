import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
  return (
    <div className="App">
      <>
        <Header></Header>
      </>
    </div>
  );
};

export default App;
