import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                <NavbarBrand href="/"><img src={require("./qg_logo_png.png")} alt="logo" width='200px'/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/" style={{color: '#f1f1f1'}}>Event</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" style={{color: '#f1f1f1'}}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={{color: '#f1f1f1'}}>Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={{color: '#f1f1f1'}}>Shopping</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={{color: '#f1f1f1'}}>Donate</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={{color: '#f1f1f1'}}>Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
                
            </div>
        );
    }
}

export default Navigation;