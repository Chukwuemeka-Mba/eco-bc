import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
        <div className="">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
