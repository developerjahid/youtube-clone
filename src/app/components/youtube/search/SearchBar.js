import React, { Fragment, Component } from 'react'
import { Container, Col, Row, Button } from "reactstrap"

class SearchBar extends Component {
    state = {
        term : " "
    }
    
    onInputChange = e => {
        this.setState({
            term : e.target.value
        })
    }

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <Fragment>
                <Container>
                    <Row className="justify-content-center fixed-top">
                        <form onSubmit={this.onFormSubmit} className="col-12 col-md-10 col-lg-8">
                            <Row className="card-body no-gutters align-items-center">
                                <Col>
                                    <input className="form-control" onChange={this.onInputChange} type="search" />
                                </Col>
                                <div className="col-auto">
                                    <Button color="warning" type="submit">Search Videos</Button>
                                </div>
                            </Row>
                        </form>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default SearchBar