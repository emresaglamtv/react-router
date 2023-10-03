import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />  {/*  <Route path="/about" component={About} olarakta yazılabilir. */}
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} /> {/*  bu kısımda :id ile router a ben buraya id vereceğim dedik. */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
