import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/login/login";
import Signup from "./components/signup/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage";
import Chatbox from "./components/chatbox/chatbox";
import Click from "./components/click-image/click";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/chatbox">
              <Chatbox />
            </Route>
            <Route exact path="/click">
              <Click />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
