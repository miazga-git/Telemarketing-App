// JavaScript source code
import React, { Component } from 'react'
import TransactionService from '../Services/TransactionService'

class PlannedTransactionsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plannedTransactions: []
        }
    }

    componentDidMount() {
        TransactionService.getPlannedTransactions().then((res) => {
            this.setState({ plannedTransactions: res.data });
        });
    }

    sellItemToClient(transaction) {
        sessionStorage.setItem('client1', transaction.client.id)
        sessionStorage.setItem('item1', transaction.item.id)
        TransactionService.deleteTransaction(transaction.id);
        this.props.history.push('/calltime')
    }
    render() {
        return (
            <div >

                <div className="row table_color ">
                    <table className="table table-striped table-bordered ">

                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Product Price</th>
                                <th>Product Image</th>
                                <th>Client Name</th>
                                <th>Client Surname</th>
                                <th>Client Email</th>
                                <th>Support</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.plannedTransactions.map(
                                    transaction =>
                                        <tr key={transaction.id}>
                                            <td>{transaction.item.name}</td>
                                            <td>{transaction.item.description}</td>
                                            <td>{transaction.item.price}</td>
                                            <td><img src={transaction.item.url} className="photo" /></td>
                                            <td>{transaction.client.name}</td>
                                            <td>{transaction.client.surname}</td>
                                            <td>{transaction.client.email}</td>
                                            <td>{transaction.support.toFixed(2)}</td>
                                            <td>
                                                <button onClick={() => this.sellItemToClient(transaction)} className="btn btn-info">Sell</button>
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
export default PlannedTransactionsComponent;