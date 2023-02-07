
import React, { Component } from 'react'
import ClientService from '../Services/ClientService'
import ProductService from '../Services/ProductService'
import TransactionService from '../Services/TransactionService'



class CallTimeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: [],
            prod: [],
            integerClient: 1,
            integerItem: 1,
            interval: '',
            freeSecounds: 10,
            freeMinutes: 5,
            discount : 0

        }
        this.functions = this.functions.bind(this);
        this.timer = this.timer.bind(this);
        this.saveTransaction = this.saveTransaction.bind(this);
        
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            console.log("UNAUTHORIZED")
            this.props.history.push('/')
        } else {
            this.timer()
        }
        ProductService.getProduct(sessionStorage.getItem('item' + this.state.integerItem)).then((res) => {
            this.setState({ prod: res.data });
            console.log("Response:"+res.data)
        });
        this.state.integerItem = this.state.integerItem + 1


        ClientService.getClient(sessionStorage.getItem('client' + this.state.integerClient)).then((res) => {
            this.setState({ client: res.data });
        });
        this.state.integerClient = this.state.integerClient + 1

        
    }

    saveTransaction(isSuccessful){
        console.log(this.state.discount)
        let transaction = { itemId: this.state.prod.id, clientId: this.state.client.id, userName: localStorage.getItem("user"), quantity: 1, successful: isSuccessful, discount: this.state.discount };
        console.log(transaction)
        TransactionService.createTransaction(transaction).then(res => {
            clearInterval(this.state.interval)
            if (isSuccessful) {
                this.props.history.push('/basket-analysis');
            }
            else {
                this.props.history.push('/iteminfo');
            }
            });
        

    }
    functions(interval) {
        console.log("jestem2")
        this.state.freeSecounds = this.state.freeSecounds - 1;
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        if (this.state.freeSecounds == 0 && this.state.freeMinutes == 0) {
            console.log("end of time")
            clearInterval(this.state.interval)
            this.saveTransaction(false)

        } else {
            if (this.state.freeSecounds == 0) {
                this.state.freeMinutes = this.state.freeMinutes - 1;
                this.state.freeSecounds = 59;
            }
        }
        console.log(this.state.freeSecounds)


        document.getElementById('time').innerHTML = addZero(this.state.freeMinutes) + " : " + addZero(this.state.freeSecounds);
    }
    addDiscount() {
        this.state.discount = 20;
        var discountErrPara = document.getElementById("discount-info");
        discountErrPara.style.display = 'block'

    }




    timer() {
    document.getElementById('time').style.visibility = 'visible';


        var interval = setInterval(this.functions, 1000);
        this.state.interval = interval;
}

    render() {
        return (
            <div>
               
                <div className="row ">
                    <table className="table table-striped table-bordered table_color">

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
                    <table className="table table-striped table-bordered table_color">

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
                    <div className="row table_color2" style={{ marginLeft: "0px" }}>
                        <button style={{ marginTop: "20px", marginBottom: "40px", backgroundColor: "green"}} className="btn btn-info" onClick={() => this.saveTransaction(true)}> I did it!</button>
                        <button style={{ marginTop: "20px", marginBottom: "40px", backgroundColor: "yellow" }} className="btn btn-info" onClick={() => this.addDiscount()}> Give 20% discount</button>
                    <p id="discount-info"> Discount added to transaction </p>
                        <button style={{ marginTop: "20px", marginBottom: "40px", backgroundColor: "red"}} className="btn btn-info" onClick={() => this.saveTransaction(false)}> Maybe next time</button>
                    </div>
                    <p id="time"></p>
                </div>
            </div>
        )
    }
}
export default CallTimeComponent;