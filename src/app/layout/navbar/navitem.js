import React from 'react'

const Navitem = ( props ) => {
    return (
        <li><a href={props.url}>{props.name}</a></li>
    )
}

export default Navitem
