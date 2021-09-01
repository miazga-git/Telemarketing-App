// JavaScript source code
import React, { Component } from 'react'
import ClientService from '../Services/ClientService'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from "react-router-dom";


class ListClientsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });
    }
    render() {
        return (
            <div>
                <button style={{ marginTop: "20px", marginLeft: "-15px", marginBottom: "40px" }} className="btn btn-outline-info"> <Link to="/add-client">Add client</Link></button>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Telephone Number</th>
                                <th>Email</th>
                                <th>State</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>Zip</th>
                                <th>Number Of Children</th>
                                <th>Age</th>
                                <th>Job</th>
                                <th>Job</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.clients.map(
                                    client =>
                                        <tr key={client.id}>
                                            <td>{client.name}</td>
                                            <td>{client.surname}</td>
                                            <td>{client.telephoneNumber}</td>
                                            <td>{client.email}</td>
                                            <td>{client.state}</td>
                                            <td>{client.street}</td>
                                            <td>{client.city}</td>
                                            <td>{client.zip}</td>
                                            <td>{client.numberOfChildren}</td>
                                            <td>{client.age}</td>
                                            <td>{client.job}</td>
                                            <td>
                                                {/*      <button onClick={() => this.buyProduct(item)} className="btn btn-info">Add to Cart</button>*/client.job}
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
export default ListClientsComponent;