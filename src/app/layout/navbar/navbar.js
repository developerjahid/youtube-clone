import React from "react"
import Navitem from "./navitem"

const Navbar = () => {
    return (
        <div>
            <ul>
                <Navitem name='Home' url='/' />
                <Navitem name='About' url='/about' />
                <Navitem name='Services' url='/services' />
                <Navitem name='Contact' url='/contact' />
            </ul>
        </div>
    )
}

export default Navbar
