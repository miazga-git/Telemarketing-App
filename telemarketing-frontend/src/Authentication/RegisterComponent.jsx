import React, { Component } from 'react'
import axios from 'axios';
import logo from '../Images/firmLogo3.png'                      


class RegisterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            surname: '',
            firstName: '',
            font: 'black'

        }
        this.saveUser = this.saveUser.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount() {
        var font = localStorage.getItem('layout')
        console.log(font);
        this.setState({ font: font })
    }
    saveUser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/auth/register', { "username": this.state.username, "password": this.state.password, "firstName": this.state.firstName, "surname": this.state.surname })
        this.props.history.push('/login');

    }
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeSurnameHandler = (event) => {
        this.setState({ surname: event.target.value });
    }

    cancel() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <form class="form_style">
                    <h1 class="form_heading">Register</h1>

                    <div id="social_wrapper">
                        <img class="social_icon" src={logo} alt="firm-logo" />
                    </div>

                    <div id="input_wrapper">
                        <div>
                            <input class="input_box" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeUsernameHandler} />
                            <br/>
                        </div>
                    <div>
                        <input class="input_box" type="text" name="firstName" placeholder="FirstName" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                        <br />
                    </div>
                    <div>
                        <input class="input_box" type="text" name="surname" placeholder="Surname" value={this.state.surname} onChange={this.changeSurnameHandler} />
                        <br />
                    </div>
                        <div>
                            <input class="input_box" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changePasswordHandler} />
                            <br/>
                    </div>
                    <div>
                        <input class="input_box" type="password" name="confirm-password" placeholder="Confirm Password" />
                        <br />
                    </div>
                        <div>
                            <input class="submit_button" type="submit" onClick={this.saveUser} value="Register"/>
                            <input class="cancel_button" type="submit" onClick={this.cancel.bind(this)} value="Cancel"/>
				        </div>
                    </div>
                </form>


        )
    }
}

export default RegisterComponent