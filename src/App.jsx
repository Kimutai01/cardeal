import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Variety from "./components/Variety";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Variety />
    </div>
  );
}

export default App;
