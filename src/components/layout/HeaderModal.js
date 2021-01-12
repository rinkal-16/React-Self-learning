import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader,
    ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from './HeaderModalStyle.css';

class HeaderModal extends Component {

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
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto" navbar>
                        <NavLink href="/" to="/">List</NavLink>
                        <NavLink href="/home" to="/home">Home</NavLink>
                        <NavLink href="/about" to="/about">About</NavLink>
                        <NavLink className={styles.navItem} href="/login" to="/login">Login</NavLink>
                        <NavLink href="/signup" to="/signup">Signup</NavLink>
                        <NavLink href="/pagination" to="/pagination">Pagination</NavLink>
                        <NavLink href="/modal" to="/modal">Modal</NavLink>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>
                    {/*</Collapse>*/}
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
                            {/*<FormGroup>*/}
                            {/*    <Label>*/}
                            {/*        <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />Remember Me*/}
                            {/*    </Label>*/}
                            {/*</FormGroup>*/}
                            <Button type="submit" value="submit">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default HeaderModal;




