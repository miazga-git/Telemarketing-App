// JavaScript source code
import React, { Component } from 'react'
import ClientService from '../Services/ClientService'
import ProductService from '../Services/ProductService'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from "react-router-dom";


class CallTimeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: [],
            prod: [],
            integerClient: 1,
            integerItem: 1
        }
    }

    componentDidMount() {


        ProductService.getProduct(sessionStorage.getItem('item' + this.state.integerItem)).then((res) => {
            this.setState({ prod: res.data });
        });
        this.state.integerItem = this.state.integerItem + 1


        ClientService.getClient(sessionStorage.getItem('client' + this.state.integerClient)).then((res) => {
            this.setState({ client: res.data });
        });
        this.state.integerClient = this.state.integerClient + 1
    }


    render() {
        return (
            <div>
               
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Product Price</th>
                                <th>Product Image</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                <tr key={this.state.prod.id}>
                                    <td>{this.state.prod.name}</td>
                                    <td>{this.state.prod.description}</td>
                                    <td>{this.state.prod.price}</td>
                                    <td><img src={this.state.prod.url} className="photo" /></td>

                                </tr>
                            }

                        </tbody>

                    </table>
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
                            </tr>
                        </thead>

                        <tbody>
                            {
                                <tr key={this.state.client.id}>
                                    <td>{this.state.client.name}</td>
                                    <td>{this.state.client.surname}</td>
                                    <td>{this.state.client.telephoneNumber}</td>
                                    <td>{this.state.client.email}</td>
                                    <td>{this.state.client.state}</td>
                                    <td>{this.state.client.street}</td>
                                    <td>{this.state.client.city}</td>
                                    <td>{this.state.client.zip}</td>
                                    <td>{this.state.client.numberOfChildren}</td>
                                    <td>{this.state.client.age}</td>
                                    <td>{this.state.client.job}</td>

                                        </tr>
                            }

                        </tbody>

                    </table>
                    <button style={{ marginTop: "20px", marginBottom: "40px" }} className="btn btn-outline-success"> <Link to="/iteminfo">I did it!</Link></button>
                    <button style={{ marginTop: "20px", marginBottom: "40px" }} className="btn btn-outline-danger"> <Link to="/iteminfo">Maybe next time</Link></button>
                </div>
            </div>
        )
    }
}
export default CallTimeComponent;