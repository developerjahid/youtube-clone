import React, { Component, Fragment} from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { } from "reactstrap"
import Layout from "./layout/layout"
import "./styles/app.css"
import YoutubeApp from "./components/youtube/YouTubeApp"

class App extends Component{
  render() {
    return (
      <Fragment>
        <Router>
          <Layout>
            <YoutubeApp />
          </Layout>
        </Router>
      </Fragment>
    );
  }
}

export default App
