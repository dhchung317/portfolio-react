import React from 'react';
import "./App.css"
// import { play, exit } from './timelines'
import { Route, Switch } from 'react-router-dom'
// import { TransitionGroup, Transition } from "react-transition-group"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar />
      <Route render={(location) => {
        const { pathname, key } = location
        return (
        //   <TransitionGroup component={null}>
        //     <Transition
        //       key={key}
        //       appear={true}
        //       onEnter={(node, appears) => play(pathname, node, appears)}
        //       onExit={(node, appears) => exit(node, appears)}
        //       timeout={{ enter: 750, exit: 0 }}
        //     >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
          //   </Transition>
          // </TransitionGroup>
        )
      }} />
      <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;