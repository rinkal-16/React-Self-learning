import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import About from '../pages/about';
import Pagination from '../pages/pagination';
import Home from '../pages/home';
import Home2 from '../pages/Home-2';
import Shopping from '../pages/Shopping';
import { Provider } from 'react-redux';
import Topbar from "./TopBar";
import store from './../../store';
import Cart from '../pages/Cart';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })} >
        <Topbar toggleSidebar={toggleSidebar} />
        <Switch>
            <Route exact path="/" component={() => "Hello"} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Pages" component={() => "Pages"} />
            <Route exact path="/pagination" component={Pagination} />
            {/* <Route exact path="/shopping" component={Shopping} /> */}
            <Route exact path="/contact" component={() => "Contact"} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home2" component={Home2} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/Page-1" component={() => "Page-1"} />
            <Route exact path="/Page-2" component={() => "Page-2"}></Route>
        </Switch>
    </Container>
);
// const cStyle = {
//   height: 100%,
//   width: 100%
// }
export default Content;
