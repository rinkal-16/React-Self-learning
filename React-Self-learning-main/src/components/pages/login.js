import React, { Component } from 'react';
import LoginCss from './Login.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

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
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({selectedValue: e});
        console.log('login try');
    }
    
    render() {
        const responseFacebook = (response) => {
            console.log(response);
            console.log(response.accessToken);
            const token  = response.accessToken;
            localStorage.setItem('accessToken', token);
            // history.push("/home");
        }
        const responseGoogle = (response) => {
            const token  = response.tokenId;
            localStorage.setItem('tokenId', token);
            console.log('login');
        }
        const { errors } = this.state;
        return (
            <div className="container-fluid">
                <div className="d-flex mx-auto login">
                        <div className="card">
                            <div className="card-body">   
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
                                <hr />
                                <FacebookLogin
                                    appId="161939435365683" //APP ID NOT CREATED YET
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                />
                                <br />
                                <br />
                                <GoogleLogin
                                    clientId="244833101393-tlvjoa831d8lpkqa03f5208ijg2vgi84.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                />
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
