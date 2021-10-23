import React, { Component } from 'react'
import axios from 'axios';


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

            <div>
                <div classNAme="container" style={{ color: this.state.font }}>

                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">

                            <h3 className="text-center">Login:</h3>


                            <div classname="card-body">



                                {this.state.hasLoginFailed && <div className="alert alert-warning">B³êdne dane logowania</div>}
                                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                                <label> Username: </label>
                                <input placeholder="Username" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />


                                <label> Password: </label>
                                <input placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />

                                <button style={{ marginTop: "20px", marginBottom: "10px" }} className="btm btn-success" onClick={this.loginClicked}>Login</button>
                                <button className="btm btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LoginComponent