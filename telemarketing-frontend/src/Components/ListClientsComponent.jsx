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
            integerClient: 1,
            integerItem: 1,
            chosenClient: ''
        }
    }

    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });

        this.state.integerItem = 1
        console.log('item=>' + sessionStorage.getItem('item' + this.state.integerItem))


        ProductService.getProduct(sessionStorage.getItem('item' + this.state.integerItem)).then((res) => {
            this.setState({ prod: res.data });
            console.log('item=>wszedl' + res)
        });
        this.state.integerItem = this.state.integerItem + 1



        //this.setState({ item: this.props.chosenItem })
        //this.state.item = sessionStorage.getItem('klucz')<--<h1>{item.name}</h1>
        //console.log('item=>' + this.state.item.id)
        //console.log('item=>' + this.state.item.name)
       // console.log('item=>' + this.state.item.description)
       // console.log('item=>' + this.state.item.url)
        //console.log('item=>' + this.state.item.price)

    }

    setClient(client) {
        let client_copy = {}
        for (let key in client) {
            client_copy[key] = client[key];
        }
        this.setState({
            chosenClient: [...this.state.chosenClient, client_copy]
        })
        sessionStorage.setItem('client' + this.state.integerClient, client.id)
        this.state.integerClient = this.state.integerClient + 1
        this.props.history.push('/calltime')
    }
    render() {
        return (
            <div >
               
                <div className="row" >
                    <table className="table table-striped table-bordered" >

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
                                                <button onClick={() => this.setClient(client)} className="btn btn-info">Wybierz klienta</button>
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