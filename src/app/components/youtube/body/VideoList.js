import React, { Fragment } from 'react'
import { ListGroup } from 'reactstrap';
import VideoItem from "./VideoItem"

const VideoList = ({ videos, onVideoSelect }) => {
    return(
        <Fragment>
            <ListGroup>
                {
                    videos.map((video) => {
                        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
                    })
                }   
            </ListGroup>
        </Fragment>
    )
}

export default VideoList