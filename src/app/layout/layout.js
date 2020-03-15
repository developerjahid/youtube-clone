import React, { Fragment} from "react"
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"

const Layout = ( props ) => {
    return (
        <Fragment>
            <Navbar />
                {props.children}
            <Footer />
        </Fragment>
    )
}

export default Layout