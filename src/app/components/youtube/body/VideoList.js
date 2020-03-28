import React, { Fragment } from 'react'
import { ListGroup } from 'reactstrap';
import VideoItem from "./VideoItem"

const VideoList = ({ videos }) => {
    return(
        <Fragment>
            <ListGroup>
                {
                    videos.map((video) => {
                        return <VideoItem title={video.snippet.title} thumbnail={video.snippet.thumbnails.default.url} />
                    })
                }   
            </ListGroup>
        </Fragment>
    )
}

export default VideoList