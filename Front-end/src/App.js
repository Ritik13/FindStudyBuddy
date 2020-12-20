import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import TopNavbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import UserForm from "./components/UserForm";
import UserRegister from "./components/UserRegister";
import UserDashboard from "./components/UserDashboard"
import AddForm from "./components/AddForm"


export default function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/Login" component={UserForm} />
        <Route path="/forgot-password" component={MainPage} />
        <Route path="/create-account" component={UserRegister} />
        <Route path="/profile" component={UserDashboard} />
        <Route path="/add-request" component={AddForm} />

      </Switch>
    </div>
  );
}
