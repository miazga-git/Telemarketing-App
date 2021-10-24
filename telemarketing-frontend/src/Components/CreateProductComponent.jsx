import React, { Component } from 'react'
import ProductService from '../Services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            price: '',
            url: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeUrlHandler = this.changeUrlHandler.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }
    changeUrlHandler = (event) => {
        this.setState({ url: event.target.value });
    }
    saveItem = (e) => {
        e.preventDefault();
        if (this.state.name == "hipopotam") {// tu wstawiê w przysz³oœci wyr. regularne , które bêd¹ sprawdza³y sens wype³nionych pól
            console.log('Nazwa jest hipopotamem');
        } else {
            let item = { name: this.state.name, description: this.state.description, price: this.state.price, url: this.state.url };
            console.log('item=>' + JSON.stringify(item));

            ProductService.createProduct(item).then(res => {
                this.props.history.push('/iteminfo');
            });
        }

    }
    cancel() {
        this.props.history.push('/iteminfo');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" >
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product to Application:</h3>
                            <div classname="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Product Name: </label>
                                        <input placeholder="Product Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price: </label>
                                        <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Url: </label>
                                        <input placeholder="Url" name="url" className="form-control" value={this.state.url} onChange={this.changeUrlHandler} />
                                    </div>
                                    <button className="btm btn-success" onClick={this.saveItem}>Save</button>
                                    <button className="btm btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateProductComponent
