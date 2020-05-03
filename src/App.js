import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
// import Header from "./Header.js";
// import Technologies from "./Technologies.js";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar />

      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        {/* <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}
      </div>
    </div>
  );
};

export default App;
