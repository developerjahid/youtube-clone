import React, { Component, Fragment} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { } from "reactstrap"
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
        <Router>
          <Layout>
            <Routes>
              <Route path='/' exact element={ <Home />} />
              <Route path='about' exact element={ <About />} />
              <Route path='services' exact element={ <Services />} />
              <Route path='contact' exact element={ <Contact />} />
            </Routes>
          </Layout>
        </Router>
      </Fragment>
    );
  }
}

export default App
