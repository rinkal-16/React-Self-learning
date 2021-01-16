import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";

function Logout() {
    let history = useHistory();

    function handleLogOut() {
        sessionStorage.setItem("accessToken", '');
        sessionStorage.clear();
        history.push("/pagination"); // whichever component you want it to route to
    }

    return (
        <button className="border-0 btn-outline bg-white" type="button" onClick={handleLogOut}>
            Logout
        </button>
    );
}

const Topbar = ({ toggleSidebar }) => {
    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    return (
        <Navbar
            color="light"
            light
            className="navbar shadow-sm mb-4 bg-white rounded"
            expand="md"
        >
            <Button color="info" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to={"/"}>
                            Shop
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/cart"}>
                            My cart
                        </NavLink>
                    </NavItem>
                    {/*<NavItem>*/}
                    {/*    <NavLink tag={Link} to={"/cart"}>*/}
                    {/*        <i className="material-icons">shopping_cart</i>*/}
                    {/*    </NavLink>*/}
                    {/*</NavItem>*/}
                    <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link">
                            <img src="https://www.qries.com/images/banner_logo.png" className="img-fluid mr-2 rounded" alt="Responsive image"
                                 width="30" height="30" />Rinkal Patadiya
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem className="bg-white m-0">
                                <Logout></Logout>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Topbar;
