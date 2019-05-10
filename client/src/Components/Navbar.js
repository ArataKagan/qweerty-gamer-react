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
        const navColor = {
            color: '#f1f1f1'
        }
        return (
            <div>
                <Navbar color="dark" light expand="md">
                <NavbarBrand href="/"><img src={require("./qg_logo_png.png")} alt="logo" width='200px'/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/" style={navColor}>Event</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" style={navColor}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={navColor}>Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={navColor}>Shopping</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={navColor}>Donate</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/" style={navColor}>Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
                
            </div>
        );
    }
}

export default Navigation;