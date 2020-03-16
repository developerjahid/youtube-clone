import React, { Component, Fragment} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./layout/layout"
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Services from "./components/pages/services"
import Contact from "./components/pages/contact"
import "./styles/app.css"

class App extends Component{
  render() {
    return (
      <Fragment>
        <Layout>
          <Router>
            <Routes>
              <Route exact path='/' element={ <Home />} />
              <Route path='about' element={ <About />} />
              <Route path='services' element={ <Services />} />
              <Route path='contact' element={ <Contact />} />
            </Routes>
          </Router>
        </Layout>
      </Fragment>
    );
  }
}

export default App
