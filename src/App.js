import React from 'react';
import "./App.css"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

import { Route, Switch } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;