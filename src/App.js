import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header name="Seva" surname="Fedoseev" />
      <Navbar roto="roto" />
      <Profile />
    </div>
  );
}

export default App;
