import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Navbar from './components/Navbar'

const App = () => (
  <Router>
    <div>
      <Navbar></Navbar>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
    </div>
  </Router>
);

export default App;