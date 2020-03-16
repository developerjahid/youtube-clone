import React from 'react'
import { Link } from 'react-router-dom'

const Navitem = ( props ) => {
    return (
        <li><Link to={props.url}>{props.name}</Link></li>
    )
}

export default Navitem
