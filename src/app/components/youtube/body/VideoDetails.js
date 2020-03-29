import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const VideoDetails = ({ video }) => {
    if(!video) {
        return <> </>
    }

    const srcVideo = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div className="videobox">
            <Card>
                <iframe title="Youtube Player" width="560" height="315" src={srcVideo} />
                <CardBody>
                    <CardTitle><h6>{video.snippet.title}</h6></CardTitle>
                    <CardText>{video.snippet.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default VideoDetails