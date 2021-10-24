import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from "react-router-dom";
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    logout() {
        localStorage.removeItem("token")
        this.props.history.push('/login')
    }

    goMainPanel() {
        this.props.history.push('/iteminfo')
    }
    goAddItem() {
        this.props.history.push('/add-item')
    }
    goAddClient() {
        this.props.history.push('/add-client')
    }
    render() {
        if (localStorage.getItem('token') != undefined) {
            return (
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div><a className="navbar-brand">Aplikacja wspierajaca promocje telemarketingowe</a>


                                <button className="btn btn-info" style={{ marginLeft: "500px" }} onClick={() => this.goMainPanel()}   >Main Panel</button>
                                <button className="btn btn-info" style={{ marginLeft: "50px" }} onClick={() => this.goAddItem()}   >Add Item</button>
                                <button className="btn btn-info" style={{ marginLeft: "50px" }} onClick={() => this.goAddClient()}   >Add Client</button>
                                <button className="btn btn-info" style={{ marginLeft: "50px" }} onClick={() => this.logout()}   >Logout</button>
                            </div>

                        </nav>
                    </header>
                </div>
            )
        } else {
            return (
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div><a className="navbar-brand">Aplikacja wspierajaca promocje telemarketingowe</a>


                            </div>

                        </nav>
                    </header>
                </div>
            )
        }
    }
}

export default withRouter(HeaderComponent);