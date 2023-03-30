import React from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

const App = () => {
  
  return (
    <div className="App">
      <>
        <Header></Header>
        <Cart></Cart>
      </>
    </div>
  );
};

export default App;
