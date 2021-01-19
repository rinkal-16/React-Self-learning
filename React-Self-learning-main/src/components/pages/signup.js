import React, {Component } from 'react';
import PropTypes from 'prop-types';
import LoginCss from './Login.css';
import Home from './home';
import { Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import history from './../../history';
import PhoneInput from 'react-phone-number-input';
import Autocomplete from 'react-google-autocomplete';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null, email: null, password: null, phone: null,
            errors: {
                firstname: '',
                password: '',
                email: '',
                phone: ''
            }
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch (name) {
            case 'firstname':
                errors.firstname =  value.length < 5 ? 'firstname must be 5' : '';
                break;
            case 'email':
                errors.email =  value.length < 5 ? 'email must be valid' : '';
                break;
            case 'password':
                errors.password =  value.length < 5 ? 'password must be 5' : '';
                break;
            case 'phone':
                errors.phone =  value.length < 7 ? 'password must be 7' : '';
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
                                <h3 className="justify-content-center">Sign Up</h3>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" className="form-control" name="firstname" placeholder="First name"
                                    onChange={this.handleChange} noValidate />
                                    {errors.firstname.length > 0 &&
                                    <span class="alert alert-danger mt-sm-4">{errors.firstname}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter email"
                                           onChange={this.handleChange} noValidate />
                                    {errors.email.length > 0 &&
                                    <span class="alert alert-danger">{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Enter password"
                                    onChange={this.handleChange} noValidate />
                                    {errors.password.length > 0 &&
                                    <span class="alert alert-danger">{errors.password}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input type="text" className="form-control" name="phone"
                                           placeholder="Enter phone number"
                                           onChange={this.handleChange} noValidate/>
                                    {errors.phone.length > 0 &&
                                    <span className="alert alert-danger">{errors.phone}</span>}

                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        {/*onClick={() => history.push('/login')}*/}
                                <p className="forgot-password text-right">
                                    Already registered <a>sign in?</a>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

Signup.propTypes = {};

export default Signup;


