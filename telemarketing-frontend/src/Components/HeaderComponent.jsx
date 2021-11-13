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
        this.props.history.push('/')
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
    goTransactionsPanel() {
        this.props.history.push('/transactions')
    }
    goPlannedSelling() {
        this.props.history.push('/planned-transactions')
    }
    render() {
      if (localStorage.getItem('token') != undefined) {
            return (
                <div>
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div><a className="navbar-brand">Aplikacja wspierajaca promocje telemarketingowe</a>
  
                            </div>
                            <div class="dropdown" style={{ marginLeft: "250px" }}>
                                <button className="btn btn-info" style={{ marginLeft: "80px" }}>Navigation</button>
                                <div class="dropdown-content">
                                    <a href="#"><button className="btn btn-info"  onClick={() => this.goMainPanel()}   >Main Panel</button></a>
                                    <a href="#"><button className="btn btn-info" onClick={() => this.goPlannedSelling()}   >Planned Selling</button></a>
                                    <a href="#"><button className="btn btn-info" onClick={() => this.goTransactionsPanel()}   >Transactions Stats</button></a>
                                </div>
                            </div>
                            <div class="dropdown" >
                                <button className="btn btn-info" style={{ marginLeft: "80px" }}>Add Options</button>
                                <div class="dropdown-content">
                                    <a href="#"><button className="btn btn-info"  onClick={() => this.goAddItem()}   >Add Item</button></a>
                                    <a href="#"><button className="btn btn-info"  onClick={() => this.goAddClient()}   >Add Client</button></a>
                                </div>
                            </div>
                            <button className="btn btn-info" style={{ marginLeft: "80px" }} onClick={() => this.logout()}   >Logout</button>
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