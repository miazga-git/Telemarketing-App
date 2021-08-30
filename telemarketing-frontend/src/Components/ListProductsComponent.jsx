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
            items: []
        }
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({ items: res.data });
        });
    }
    render() {
        return (
            <div>
                <button style={{ marginTop: "20px", marginLeft: "-15px", marginBottom: "40px" }} className="btn btn-outline-info"> <Link to="/add-item">Add item</Link></button>
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
                                                {/*      <button onClick={() => this.buyProduct(item)} className="btn btn-info">Add to Cart</button>*/}
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