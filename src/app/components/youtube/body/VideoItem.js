import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { ListGroupItem } from 'reactstrap';

const VideoItem = (props) => {
    return(
        <Fragment>
            <ListGroupItem>
                <Link className="float-left man" to="/" >
			      <img src={props.thumbnail} alt={props.title} />
			    </Link>
			    <div>
                    <h6>{props.title}</h6>
			    </div>
            </ListGroupItem>
        </Fragment>
    )
}

export default VideoItem