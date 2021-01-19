import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./Submenu";

const SideBar = ({ isOpen, toggle }) => (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
        <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
            <h3>React Demo</h3>
        </div>
        <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
                <NavItem>
                    <NavLink tag={Link} to={"/home"}>
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/home2"}>
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Home2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/about"}>
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                        About
                    </NavLink>
                </NavItem>
                <SubMenu title="Pages" icon={faCopy} items={submenus[1]} />
                <NavItem>
                    <NavLink tag={Link} to={"/pagination"}>
                        <FontAwesomeIcon icon={faImage} className="mr-2" />
                        Pagination
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/shopping"}>
                        <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                        Shopping
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/contact"}>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
            {/*<Switch>*/}
            {/*    <Route path="/about" component={About} />*/}
            {/*    <Route path="/home" component={Home} />*/}
            {/*    <Route path="/pagination" component={Pagination} />*/}
            {/*    <Route path="/shopping" component={Shopping} />*/}
            {/*</Switch>*/}
        </div>
    </div>
);

const submenus = [
    [
        {
            title: "Home 1",
            target: "Home",
        },
        {
            title: "Home 2",
            target: "Home-2",
        },
        {
            itle: "Home 3",
            target: "Home-3",
        },
    ],
    [
        {
            title: "Page 1",
            target: "Page-1",
        },
        {
            title: "Page 2",
            target: "Page-2",
        },
    ],
];

export default SideBar;
