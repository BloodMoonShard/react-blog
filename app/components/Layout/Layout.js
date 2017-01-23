import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'

export class Layout extends React.Component {

    static propTypes = {
        children: React.PropTypes.node
    }

    render() {
        return (
            <div >
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Home</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Link className="btn btn-default" to="/add">Add new post</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
                {/*<footer className="container">
                    Copyright 2017 by @bloodmoonshard
                </footer>*/}
            </div>
        )

    }
}
