import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

import Home from './components/Home';

import About from './components/About';
import Users from './components/Users';
import Error404 from './components/Error404'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle= {{backgroundColor: "black" , color: '#fff'}} to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle= {{backgroundColor: "black" , color: '#fff'}} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle= {{backgroundColor: "black" , color: '#fff'}} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />  {/*  <Route path="/about" component={About} olarakta yazılabilir. */}
          <Route path="/users" element={<Users />} />
          {/* <Route path="/user/:id" element={<User />} />      bu kısımda :id ile router a ben buraya id vereceğim dedik. */}
          <Route path="*" element={<Error404 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
