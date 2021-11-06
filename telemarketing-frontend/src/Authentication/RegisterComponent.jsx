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
            confirmPassword: '',
            accept: 'false'

        }
        this.saveUser = this.saveUser.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.cancel = this.cancel.bind(this);
        this.functions = this.functions.bind(this);
 
    }
    componentDidMount() {
        this.usernameValidationFunction();
        this.firstnameValidationFunction();
        this.surnameValidationFunction();
        this.passwordValidationFunction();
        this.confirmPasswordValidationFunction();
    }
    saveUser = (e) => {
        e.preventDefault();
        var usernameErrPara = document.getElementById("username-err");
        var firstnameErrPara = document.getElementById("firstname-err");
        var surnameErrPara = document.getElementById("surname-err");
        var passwordErrPara = document.getElementById("password-err");
        var confirmPasswordErrPara = document.getElementById("confirmPassword-err")
        if (this.state.username == '') {
            usernameErrPara.style.display = 'block';
        }
        if (this.state.firstName== '') {
            firstnameErrPara.style.display = 'block';
        }
        if (this.state.surname == '') {
            surnameErrPara.style.display = 'block';
        }
        if (this.state.password == '') {
            passwordErrPara.style.display = 'block';
        }
        if (this.state.confirmPassword == '') {
            confirmPasswordErrPara.style.display = 'block';
        } 
        if (usernameErrPara.style.display == 'none' && this.state.username != '' && firstnameErrPara.style.display == 'none' && this.state.firstname != ''
            && surnameErrPara.style.display == 'none' && this.state.surname != '' && passwordErrPara.style.display == 'none' && this.state.password != ''
            && this.state.confirmPassword != '' && confirmPasswordErrPara.style.display == 'none' ) {
            axios.post('http://localhost:8080/api/auth/register', { "username": this.state.username, "password": this.state.password, "firstName": this.state.firstName, "surname": this.state.surname })
            this.props.history.push('/');
        }


    }
    usernameValidationFunction() {
        var username = document.getElementById('username')
        var usernameErrPara = document.getElementById("username-err");
        username.addEventListener('input', function (e) {
            var pattern = /^[\w]{6,8}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                usernameErrPara.style.display = 'none'
            } else { usernameErrPara.style.display = 'block' }
        })
    }
    firstnameValidationFunction() {
        var username = document.getElementById('firstname')
        var usernameErrPara = document.getElementById("firstname-err");
        username.addEventListener('input', function (e) {
            var pattern = /^[\w]{3,20}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                usernameErrPara.style.display = 'none'
            } else { usernameErrPara.style.display = 'block' }
        })
    }
    surnameValidationFunction() {
        var username = document.getElementById('surname')
        var usernameErrPara = document.getElementById("surname-err");
        username.addEventListener('input', function (e) {
            var pattern = /^[\w]{3,20}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                usernameErrPara.style.display = 'none'
            } else { usernameErrPara.style.display = 'block' }
        })
    }
    passwordValidationFunction() {
        var username = document.getElementById('password')
        var usernameErrPara = document.getElementById("password-err");
        username.addEventListener('input', function (e) {
            var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                usernameErrPara.style.display = 'none'
            } else { usernameErrPara.style.display = 'block' }
        })
    }
    functions(e) {
        var usernameErrPara = document.getElementById("confirmPassword-err");
        var currentValue = e.target.value;
        if (currentValue == this.state.password) {
            usernameErrPara.style.display = 'none'
        } else { usernameErrPara.style.display = 'block' }
    }
    confirmPasswordValidationFunction() {
        var username = document.getElementById('confirmPassword')
        username.addEventListener('input', this.functions);   
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
    changeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    cancel() {
        this.props.history.push('/');
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
                       
                        <input class="input_box" id="username" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeUsernameHandler} />
                        <p id="username-err"> Please enter a vaild Username ( min 6, max 8 letters)</p>
                        <br />
                        </div>
                    <div>
                        <input class="input_box" id="firstname" type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                        <p id="firstname-err"> Please enter a vaild First Name ( min 3, max 20 letters )</p>
                        <br />
                    </div>
                    <div>
                        <input class="input_box" id="surname" type="text" name="surname" placeholder="Surname" value={this.state.surname} onChange={this.changeSurnameHandler} />
                        <p id="surname-err"> Please enter a vaild Surname ( min 3, max 20 letters )</p>
                        <br />
                    </div>
                        <div>
                            <input class="input_box" id="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changePasswordHandler} />
                        <p id="password-err"> Please enter a vaild Password ( min 8 characters, at least one letter, one number and one special character )</p>
                        <br />
                    </div>
                    <div>
                        <input class="input_box" id="confirmPassword" type="password" name="confirm-password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.changeConfirmPassword}/>
                        <p id="confirmPassword-err"> Please enter valid password </p>
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