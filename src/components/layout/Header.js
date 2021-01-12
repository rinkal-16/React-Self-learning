import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal,
    ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar bg="primary" color="light" expand="md">
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/" to="/">List</Nav.Link>
                        <Nav.Link href="/home" to="/home">Home</Nav.Link>
                        <Nav.Link href="/about" to="/about">About</Nav.Link>
                        <Nav.Link href="/login" to="/login">Login</Nav.Link>
                        <Nav.Link href="/signup" to="/signup">Signup</Nav.Link>
                        <Nav.Link href="/pagination" to="/pagination">Pagination</Nav.Link>

                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"  innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="bg-primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Header;
