import React, {Component } from 'react';
// import PropTypes from 'prop-types';
import LoginCss from './Login.css';
// import Home from './home';
// import { Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import history from './../../history';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null, password: null,
            errors: {
                password: '',
                email: '',
            }
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch (name) {
            case 'email':
                errors.email =  value.length < 5 ? 'email must be valid' : '';
                break;
            case 'password':
                errors.password =  value.length < 5 ? 'password must be 5' : '';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm(this.state.errors)) {
            console.log('valid');
            history.push("/home");
        } else {
            console.log('invalid');
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container-fluid">
                <div className="d-flex mx-auto login">
                        <div class="card">
                            <div class="card-body">
                                <form className={LoginCss} onSubmit={this.handleSubmit} noValidate>
                                    <h3 className="justify-content-center">Sign In</h3>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" name="email"
                                               placeholder="Enter email"
                                               onChange={this.handleChange} noValidate/>
                                        {errors.email.length > 0 &&
                                        <span className="alert alert-danger">{errors.email}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password"
                                               placeholder="Enter password"
                                               onChange={this.handleChange} noValidate/>
                                        {errors.password.length > 0 &&
                                        <span className="alert alert-danger">{errors.password}</span>}
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    {/*<p className="forgot-password text-right">*/}
                                    {/*    Already registered <a href="#">sign in?</a>*/}
                                    {/*</p>*/}
                                    {/*onClick={() => history.push('/home')}*/}
                                </form>
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
