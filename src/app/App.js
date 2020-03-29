import React, { Component, Fragment} from "react"
import { } from "reactstrap"
import Layout from "./layout/layout"
import "./styles/app.css"
import YoutubeApp from "./components/youtube/YouTubeApp"

class App extends Component{
  render() {
    return (
      <Fragment>
          <Layout>
            <YoutubeApp />
          </Layout>
      </Fragment>
    );
  }
}

export default App
