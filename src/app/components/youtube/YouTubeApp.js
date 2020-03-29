import React, { Component, Fragment } from 'react'
import SearchBar from './search/SearchBar'
import APIs from './apis/APIs'
import VideoList from "./body/VideoList"
import VideoDetails from "./body/VideoDetails"
import { Container, Row, Col } from 'reactstrap';

class YoutubeApp extends Component {
    state = { videos: [], selectedVideo: null }

    onTermSubmit = async term => {
        const res = await APIs.get("/search", {
            params: {
                q: term
            }
        })
        this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
    }
    
    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }


    render() {
        return(
            <Fragment>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <Container>
                    <Row>
                        <Col md="8">
                            <VideoDetails video={this.state.selectedVideo} />
                        </Col>
                        <Col md="4">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default YoutubeApp