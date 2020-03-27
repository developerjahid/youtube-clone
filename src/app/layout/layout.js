import React, { Fragment} from "react"
import Footer from "./footer/footer"

const Layout = ( props ) => {
    return (
        <Fragment>
                {props.children}
            <Footer />
        </Fragment>
    )
}

export default Layout