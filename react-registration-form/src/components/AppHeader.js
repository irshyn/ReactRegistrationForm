import React, { Component } from 'react';
import '../css/App.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class AppHeader extends Component {
    render() {
        return (
            <Navbar className="navbar-style" expand="md">
                <NavbarBrand href="/">
                    <img src="/avatar_450x331.jpg" width="64" className="d-inline-block" alt="Guinea Pig Olympics" />
                    Guinea Pig Olympics
                </NavbarBrand>

                <Nav className="ml-auto" navbar>                        
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Sports
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/">Stick Jumping</DropdownItem>
                            <DropdownItem href="/">Hoop Leaping</DropdownItem>
                            <DropdownItem href="/">Lawn Running</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/">Olympics Events</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default AppHeader;