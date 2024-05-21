import { useState } from 'react';

import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import ClubLogo from '../assets/img/ClubLogo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar sticky="top" expand="md" className="navebar">
            <NavbarBrand className="ms-5" href="/">
                <img
                    src={ClubLogo}
                    alt="logo"
                    className="float-start"
                    id="see"
                />
                <h1 className="mt-1">ee You Sunday</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/clubs">
                            <i className="fa fa-list fa-lg" /> Clubs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            <i className="fa fa-info fa-lg" /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/members">
                            <i className="fa fa-address-card fa-lg" /> Members
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
