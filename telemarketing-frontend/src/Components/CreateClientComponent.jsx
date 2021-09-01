import React, { Component } from 'react'
import ClientService from '../Services/ClientService';

class CreateClientComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            surname: '',
            telephoneNumber: '',
            email: '',
            state: '',
            street: '',
            city: '',
            zip: '',
            numberOfChildren: '',
            age: '',
            job: '',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeTelephoneNumberHandler = this.changeTelephoneNumberHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeStreetHandler = this.changeStreetHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeZipHandler = this.changeZipHandler.bind(this);
        this.changenumberOfChildrenHandler = this.changenumberOfChildrenHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeJobHandler = this.changeJobHandler.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeSurnameHandler = (event) => {
        this.setState({ surname: event.target.value });
    }
    changeTelephoneNumberHandler = (event) => {
        this.setState({ telephoneNumber: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });
    }
    changeStreetHandler = (event) => {
        this.setState({ street: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changeZipHandler = (event) => {
        this.setState({ zip: event.target.value });
    }
    changenumberOfChildrenHandler = (event) => {
        this.setState({ numberOfChildren: event.target.value });
    }
    changeAgeHandler = (event) => {
        this.setState({ age: event.target.value });
    }
    changeJobHandler = (event) => {
        this.setState({ job: event.target.value });
    }
    saveItem = (e) => {
        e.preventDefault();
        if (this.state.name == "hipopotam") {// tu wstawiê w przysz³oœci wyr. regularne , które bêd¹ sprawdza³y sens wype³nionych pól
            console.log('Nazwa jest hipopotamem');
        } else {
            let client = {
                name: this.state.name, surname: this.state.surname, telephoneNumber: this.state.telephoneNumber,
                email: this.state.email, state: this.state.state, street: this.state.street, city: this.state.city,
                zip: this.state.zip, numberOfChildren: this.state.numberOfChildren, age: this.state.age, job: this.state.job
            };
            console.log('item=>' + JSON.stringify(client));

            ClientService.createClient(client).then(res => {
                this.props.history.push('clientinfo');
            });
        }

    }
    cancel() {
        this.props.history.push('/clientinfo');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" >
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Client to Application:</h3>
                            <div classname="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Client Name: </label>
                                        <input placeholder="Product Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Surname: </label>
                                        <input placeholder="Surname" name="surname" className="form-control" value={this.state.surname} onChange={this.changeSurnameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> TelephoneNumber: </label>
                                        <input placeholder="TelephoneNumber" name="telephoneNumber" className="form-control" value={this.state.price} onChange={this.changeTelephoneNumberHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.url} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> State: </label>{/*tu moze byc blad jak cos*/}
                                        <input placeholder="State" name="state" className="form-control" value={this.state.state} onChange={this.changeStateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Street: </label>
                                        <input placeholder="Street" name="street" className="form-control" value={this.state.street} onChange={this.changeStreetHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Zip: </label>
                                        <input placeholder="Zip" name="zip" className="form-control" value={this.state.zip} onChange={this.changeZipHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Number Of Children: </label>
                                        <input placeholder="Number Of Children" name="numberOfChildren" className="form-control" value={this.state.numberOfChildren} onChange={this.changenumberOfChildrenHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Age: </label>
                                        <input placeholder="Age" name="age" className="form-control" value={this.state.age} onChange={this.changeAgeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Job: </label>
                                        <input placeholder="Job" name="job" className="form-control" value={this.state.job} onChange={this.changeJobHandler} />
                                    </div>
                                    <button className="btm btn-success" onClick={this.saveItem}>Save</button>
                                    <button className="btm btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br>

                    </br>
            </div>
            

        )
    }
}

export default CreateClientComponent
