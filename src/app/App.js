import React, { Component, Fragment} from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/services' component={Services} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </Router>
        </Layout>
      </Fragment>
    );
  }
}

export default App
