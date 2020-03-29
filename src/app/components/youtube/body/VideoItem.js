import React, { Fragment } from 'react'
import { ListGroupItem } from 'reactstrap';

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <Fragment>
            <ListGroupItem className="videolist" onClick={() => onVideoSelect(video)} > 
                <div className="float-left" >
			      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
			    </div>
			    <div>
                    <h6>{video.snippet.title}</h6>
			    </div>
            </ListGroupItem>
        </Fragment>
    )
}

export default VideoItem