import React, {Component} from 'react'
import { NavLink} from 'react-router-dom'
{/*import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'*/}

class AppNavBar extends Component {
    state = {
        isOpen: false
    }    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
        <div>
            <NavLink to='film-details'>Film Details </NavLink>
            <NavLink to='/'>Home </NavLink>   

{/*}            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Dan's Video Shop</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/dwelc/node-film-app">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
        </Navbar>*/}
        </div>
        )
    }
}

export default AppNavBar