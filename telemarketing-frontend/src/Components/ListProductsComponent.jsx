// JavaScript source code
import React, { Component } from 'react'
import ProductService from '../Services/ProductService'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from "react-router-dom";


class ListProductsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chosenItem: '', 
            items: [],
            integerItem: 1
        }
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({ items: res.data });
        });
        this.state.integerItem = 1
    }
    handleCallback = (childData) => {
        this.setState({ chosenItem: childData })
    }
    sellProduct(item) {
        let item_copy = {}
        for (let key in item) {
            item_copy[key] = item[key];
        }
        this.setState({
            chosenItem: [...this.state.chosenItem, item_copy]
        })
        console.log("Wybrano item", this.state.chosenItem)
        console.log("Przekazujemy id",item.id)
        sessionStorage.setItem('item' + this.state.integerItem, item.id)
        this.state.integerItem = this.state.integerItem+1
        console.log("Integer", this.state.integerItem)
        this.props.history.push('/clientinfo')

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
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td><img src={item.url} className="photo" /></td>
                                            <td>
                                                <button onClick={() => this.sellProduct(item)} className="btn btn-info">Sell</button>
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
export default ListProductsComponent;