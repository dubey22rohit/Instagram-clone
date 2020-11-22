import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";
import Profile from "./components/routes/Profile";
import Signup from "./components/routes/Signup";
import CreatePost from "./components/routes/CreatePost";
import "./App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/signup'>
          <Signup/>
        </Route>
        <Route path = '/profile'>
          <Profile/>
        </Route>
        <Route path = '/create'>
          <CreatePost/>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
