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
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push('/')
        }
        this.nameValidationFunction();
        this.descValidationFunction();
        this.priceValidationFunction();
        this.urlValidationFunction();
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
        var nameErrPara = document.getElementById("name-err");
        var descErrPara = document.getElementById("description-err");
        var priceErrPara = document.getElementById("price-err");
        var urlErrPara = document.getElementById("url-err");
        var fieldsNotNullErrPara = document.getElementById("notNullFields-err");
        if (this.state.name == '' || this.state.description == '' || this.state.price == '' || this.state.url == '' ) {// tu wstawiê w przysz³oœci wyr. regularne , które bêd¹ sprawdza³y sens wype³nionych pól
            fieldsNotNullErrPara.style.display = 'block';
        } else if(nameErrPara.style.display != 'block' && descErrPara.style.display != 'block' && priceErrPara.style.display != 'block' && urlErrPara.style.display != 'block') {
            let item = { name: this.state.name, description: this.state.description, price: this.state.price, url: this.state.url };

            ProductService.createProduct(item).then(res => {
                this.props.history.push('/iteminfo');
            }).catch(() => {
                var itemErrPara = document.getElementById("item-err");
                itemErrPara.style.display = 'block'
            })
        }

    }
    nameValidationFunction() {
        var name = document.getElementById('name')
        var nameErrPara = document.getElementById("name-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        var itemErrPara = document.getElementById("item-err");
        name.addEventListener('input', function (e) {
            var pattern = /^[\s\p{L}]{3,25}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                nameErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
                itemErrPara.style.display = 'none'
            } else { nameErrPara.style.display = 'block' }
        })
    }
    descValidationFunction() {
        var desc = document.getElementById('description')
        var descErrPara = document.getElementById("description-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        desc.addEventListener('input', function (e) {
            var pattern = /^[\s\p{L}]{6,20}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                descErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { descErrPara.style.display = 'block' }
        })
    }
    priceValidationFunction() {
        var price = document.getElementById('price')
        var priceErrPara = document.getElementById("price-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        price.addEventListener('input', function (e) {
            var pattern = /^[\d]{1,}\.[\d]{2}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                priceErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { priceErrPara.style.display = 'block' }
        })
    }
    urlValidationFunction() {
        var url = document.getElementById('url')
        var urlErrPara = document.getElementById("url-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        url.addEventListener('input', function (e) {
            var pattern = /^https?:\/\/[\d\w\.\-\/]*\.(?:jpg|gif|png)$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                urlErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { urlErrPara.style.display = 'block' }
        })
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
                                        <label> Product Name*: </label>
                                        <input placeholder="Product Name" id="name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                        <p id="name-err"> Please enter a vaild product name ( min 3, max 25 letters) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Description*: </label>
                                        <input placeholder="Description" id="description" name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                        <p id="description-err"> Please enter a vaild description ( min 6, max 50 letters) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Price*: </label>
                                        <input placeholder="Price" id="price" name="price" className="form-control" value={this.state.price} onChange={this.changePriceHandler} />
                                        <p id="price-err"> Please enter a vaild price ( xx.xx format ) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Url*: </label>
                                        <input placeholder="Url" id="url" name="url" className="form-control" value={this.state.url} onChange={this.changeUrlHandler} />
                                        <p id="url-err"> Please enter a vaild url </p>
                                    </div>
                                    <p id="notNullFields-err"> Please fill all fields marked as * </p>
                                    <p id="item-err"> This item already exists, please change name of item </p>
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
