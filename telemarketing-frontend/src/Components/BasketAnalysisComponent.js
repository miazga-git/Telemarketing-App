import React, { Component } from 'react'
import TransactionService from '../Services/TransactionService'
import ClientService from '../Services/ClientService'


class BasketAnalysisComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            client: []
        }
    }

    componentDidMount() {
        console.log("Pobrany item1 to: " + sessionStorage.getItem('item1'))
        TransactionService.getThreeItemsWithBiggestSupport(sessionStorage.getItem('item1')).then((res) => {
            this.setState({ products: res.data })
            console.log("Produkty: "+this.state.products)
        })
        ClientService.getClient(sessionStorage.getItem('client1')).then((res) => {
            this.setState({ client: res.data });
        });
    }

    planSelling(item, support) {
        let transaction = { itemId: item.id, clientId: this.state.client.id, quantity: 1, planned: 'true' ,support: support};
        TransactionService.createTransaction(transaction).then(res => {
            clearInterval(this.state.interval)
            this.props.history.push('/iteminfo');
        });
    }
    goMainPanel() {
        this.props.history.push('/iteminfo')
    }

    render() {
        return (
            <div className="row">
                <div style={{ marginLeft: "60px" }}>
                    <h1 style={{ textAlign: "center" }}> The customer {this.state.client.name} {this.state.client.surname} may also be interested in purchasing the following products:</h1>
                    <div style={{ marginLeft: "20px"}}>
                        {this.state.products.map(
                            prod =>
                                <div class="card" style={{ width: "20rem", float: "left", marginLeft: "20px", marginTop: "20px" }}>
                    
                            <div>
                                        <img src={prod.item.url} alt="Card example image" className="photo"></img>

                                <div class="card-body">
                                            <h4 class="card-title">{prod.item.name}</h4>
                                            <h5 class="card-subtitle">{prod.item.description}</h5>
                                            <p class="card-text">Price: {prod.item.price}
                                                <br></br>Support: {prod.support.toFixed(2)}</p>
                                            <button onClick={() => this.planSelling(prod.item, prod.support)} className="btn btn-info">Plan Selling</button>

                                        </div>
                                
                            </div>
                   
                        </div>
                            )}
                    </div>
                </div>
                <div style={{ marginTop: "25px" }}>
                    <div className="row" >
                        <button style={{ clear: "both", display: "block", textAlign: "center", marginLeft:"70px" }} className="btn btn-outline-danger" onClick={() => this.goMainPanel()}> Not this time</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default BasketAnalysisComponent;