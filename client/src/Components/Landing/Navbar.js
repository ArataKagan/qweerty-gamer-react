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
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Qweerty Gamers</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Event</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Shopping</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Donate</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;