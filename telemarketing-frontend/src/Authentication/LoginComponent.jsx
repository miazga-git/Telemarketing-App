import React, { Component } from 'react'
import axios from 'axios';
import logo from '../Images/firmLogo3.png'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount() {
        var font = localStorage.getItem('layout')
        console.log(font);
        this.setState({ font: font })
    }
    cancel() {
        this.props.history.push('/');
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    getAccessToken() {

        return axios.post('http://localhost:8080/api/auth/login', { "username": this.state.username, "password": this.state.password })
            .then(response => {
                this.response = response.data
                return this.response.access_token
            })
    }
    loginClicked = (e) => {

        e.preventDefault();
        this.getAccessToken().then(data => {

            localStorage.setItem('token', data);
            this.props.history.push('/iteminfo')

        })



    }


    render() {
        return (
           // <body style={{ backgroundColor: "#f2f6ff" }}>
                <form>
                    <h1 class="form_heading">Login</h1>

                    <div id="social_wrapper">
                        <img class="social_icon" src={logo} alt="firm-logo" />
                    </div>

                    <div id="input_wrapper">
                        <div>
                            <input class="input_box" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                            <br/>
                        </div>

                        <div>
                            <input class="input_box" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            <br/>
				        </div>
                        <div>
                            <input class="input_box" type="password" name="confirm-password" placeholder="Confirm Password"/>
                            <br/>
				        </div>
                        <div>
                            <input class="submit_button" type="submit" onClick={this.loginClicked} value="Login"/>
				        </div>
                    </div>
                </form>


                 




        //    </body>

        );
    }
}

export default LoginComponent