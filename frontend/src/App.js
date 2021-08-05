import "./App.css";
import React from "react";
import Routes from "./services/Routes";
import Navigation from "./components/NavBar.js";
import "./index.css";

function App() {
  return (
    <div className="Appcontainer">
      <Navigation />

      <Routes />
    </div>
  );
}

export default App;
