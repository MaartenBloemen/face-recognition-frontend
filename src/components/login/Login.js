import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    checkLogin = () => {
        if (this.state.userName === 'admin' && this.state.password === 'admin') {
            sessionStorage.setItem('user', 'admin');
            window.location = '/';
        }
    };

    render() {
        return (
            <div>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <br/>
                        <div className="fadeIn first">
                            <i className='fa fa-user fa-3x'/>
                        </div>
                        <div className='form-login'>
                            <input type="text"
                                   id="login"
                                   className="fadeIn second"
                                   name="userName"
                                   value={this.state.userName}
                                   onChange={this.handleInputChange}
                                   placeholder="login"/>
                            <input type="password"
                                   id="password"
                                   className="fadeIn third"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.handleInputChange}
                                   placeholder="password"/>
                            <button className='btn-lg btn-primary'
                                    onClick={() => this.checkLogin()}>
                                <i className='fa fa-sign-in-alt'/> Log in
                            </button>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
