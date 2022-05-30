import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header name="Seva" surname="Fedoseev" />
      <Navbar roto="roto" />
      <div className="app-wrapper-content">
        <Route component={Dialogs} />
        <Route component={Profile} />
      </div>
    </div>
  );
}

export default App;
