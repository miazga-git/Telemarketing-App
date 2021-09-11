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


class ListClientsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: [],
            prod: [],
            integer: ''
        }
    }

    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });

        this.state.integer = 0
        console.log('item=>' + sessionStorage.getItem(this.state.integer))


        ProductService.getProduct(sessionStorage.getItem(this.state.integer)).then((res) => {
            this.setState({ prod: res.data });
            console.log('item=>wszedl' + res)
        });
        this.state.integer = this.state.integer + 1
        //this.setState({ item: this.props.chosenItem })
        //this.state.item = sessionStorage.getItem('klucz')<--<h1>{item.name}</h1>
        //console.log('item=>' + this.state.item.id)
        //console.log('item=>' + this.state.item.name)
       // console.log('item=>' + this.state.item.description)
       // console.log('item=>' + this.state.item.url)
        //console.log('item=>' + this.state.item.price)

    }
    render() {
        return (
            <div>
                <button style={{ marginTop: "20px", marginLeft: "-15px", marginBottom: "40px" }} className="btn btn-outline-info"> <Link to="/add-client">Add client</Link></button>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Product Price</th>
                                <th>Product Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                        <tr key={this.state.prod.id}>
                                    <td>{this.state.prod.name}</td>
                                    <td>{this.state.prod.description}</td>
                                    <td>{this.state.prod.price}</td>
                                    <td><img src={this.state.prod.url} className="photo" /></td>
                                            <td>
                                               
                                            </td>
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
                                <th>Job</th>
                                <th>Action</th>
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
                                                <button onClick={() => this.setClient(this.state.item)} className="btn btn-info">Add to Cart</button>
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