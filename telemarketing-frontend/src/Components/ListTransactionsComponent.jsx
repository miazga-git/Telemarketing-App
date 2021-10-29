import React, { Component } from 'react'
import TransactionService from '../Services/TransactionService'



class ListTransactionsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions: [],
            statistics: [],
            statisticsPerItems: []
        }
    }

    componentDidMount() {
        TransactionService.getTransactions().then((res) => {
            this.setState({ transactions: res.data });
        });
        TransactionService.getStatistics().then((res) => {
            this.setState({ statistics: Object.entries(res.data) });
        });
        TransactionService.getStatisticsPerItems().then((res) => {
            this.setState({ statisticsPerItems: res.data });
        });
    }

    render() {
        return (
            <div>
                <div>
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Number of successful transactions</th>
                                <th>Number of unsuccessful transactions</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                                
                                <tr>
                                {this.state.statistics.map(
                                    s =>
                                            <td>{(s[1]).toString()}</td>
                                )}
                                        </tr>
                                
                            

                        </tbody>

                    </table>
                </div>
                <div>
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Number of successful transactions</th>
                                <th>Number of unsuccessful transactions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.statisticsPerItems.map(
                                statisticPerItem =>
                                    <tr key={statisticPerItem.item.id}>
                                        <td>{statisticPerItem.item.name}</td>
                                        <td>{statisticPerItem.numberOfSuccessful}</td>
                                        <td>{statisticPerItem.numberOfUnsuccessful}</td>
                                    </tr>
                                )
                             }


                        </tbody>

                    </table>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Client Name</th>
                                <th>Client Surname</th>
                                <th>Client City</th>
                                <th>Number of children</th>
                                <th>Age</th>
                                <th>Job</th>
                                <th>Discount</th>
                                <th>Transaction Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.transactions.map(
                                    transaction =>
                                        <tr key={transaction.id}>
                                            <td>{transaction.item.name}</td>
                                            <td><img src={transaction.item.url} className="photo" /></td>
                                            <td>{transaction.client.name}</td>
                                            <td>{transaction.client.surname}</td>
                                            <td>{transaction.client.city}</td>
                                            <td>{transaction.client.numberOfChildren}</td>
                                            <td>{transaction.client.age}</td>
                                            <td>{transaction.client.job}</td>
                                            <td>{transaction.discount} %</td>
                                            {transaction.successful &&
                                                <td className="succeed">{(transaction.successful).toString()}</td>
                                            } 
                                            {!transaction.successful &&
                                                <td className="defeat">{(transaction.successful).toString()}</td>
                                            } 
                                            
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
export default ListTransactionsComponent;