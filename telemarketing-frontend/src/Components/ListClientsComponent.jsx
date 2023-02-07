import React, { Component } from 'react'
import ClientService from '../Services/ClientService'
import ProductService from '../Services/ProductService'



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
        if (!localStorage.getItem('token')) {
            this.props.history.push('/')
        }
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });

        this.state.integerItem = 1


        ProductService.getProduct(sessionStorage.getItem('item' + this.state.integerItem)).then((res) => {
            this.setState({ prod: res.data });
        });
        this.state.integerItem = this.state.integerItem + 1


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
               
                <div className="row table_color" >
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
                                <th>Address</th>
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
                                                <button onClick={() => this.setClient(client)} className="btn btn-info">Choose Client</button>
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