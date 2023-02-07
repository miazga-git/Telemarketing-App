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
    componentDidMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push('/')
        }
        this.nameValidationFunction();
        this.surnameValidationFunction();
        this.telValidationFunction();
        this.emailValidationFunction();
        this.stateValidationFunction();
        this.streetValidationFunction();
        this.cityValidationFunction();
        this.zipValidationFunction();
        this.childrenValidationFunction();
        this.ageValidationFunction();
        this.jobValidationFunction();
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
        var nameErrPara = document.getElementById("name-err");
        var surnameErrPara = document.getElementById("surname2-err");
        var telErrPara = document.getElementById("tel-err");
        var emailErrPara = document.getElementById("email-err");
        var stateErrPara = document.getElementById("state-err");
        var streetErrPara = document.getElementById("street-err");
        var cityErrPara = document.getElementById("city-err");
        var zipErrPara = document.getElementById("zip-err");
        var childrenErrPara = document.getElementById("children-err");
        var ageErrPara = document.getElementById("age-err");
        var jobErrPara = document.getElementById("job-err");


        var fieldsNotNullErrPara = document.getElementById("notNullFields-err");
        if (this.state.name == '' || this.state.surname == '' || this.state.telephoneNumber == '' || this.state.email == '' ||
            this.state.state == '' || this.state.street == '' || this.state.city == '' || this.state.zip == '') {
            fieldsNotNullErrPara.style.display = 'block';
        } else if (nameErrPara.style.display != 'block' && telErrPara.style.display != 'block' && emailErrPara.style.display != 'block' && stateErrPara.style.display != 'block' && childrenErrPara.style.display != 'block' &&
            cityErrPara.style.display != 'block' && surnameErrPara.style.display != 'block' && streetErrPara.style.display != 'block' && zipErrPara.style.display != 'block' && jobErrPara.style.display != 'block' && ageErrPara.style.display != 'block' 
            ) {
            let client = {
                name: this.state.name, surname: this.state.surname, telephoneNumber: this.state.telephoneNumber,
                email: this.state.email, state: this.state.state, street: this.state.street, city: this.state.city,
                zip: this.state.zip, numberOfChildren: this.state.numberOfChildren, age: this.state.age, job: this.state.job
            };

            ClientService.createClient(client).then(res => {
                this.props.history.push('iteminfo');
            }).catch(() => {
                var clientErrPara = document.getElementById("client-err");
                clientErrPara.style.display = 'block'
            });
        }

    }
    nameValidationFunction() {
        var name = document.getElementById('name')
        var nameErrPara = document.getElementById("name-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        var clientErrPara = document.getElementById("client-err");
        name.addEventListener('input', function (e) {
            var pattern = /^[\s\p{L}]{3,25}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                nameErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
                clientErrPara.style.display = 'none'
            } else { nameErrPara.style.display = 'block' }
        })
    }
    surnameValidationFunction() {
        var surname = document.getElementById('surname')
        var surnameErrPara = document.getElementById("surname2-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        var clientErrPara = document.getElementById("client-err");
        surname.addEventListener('input', function (e) {
            var pattern = /^[\s\p{L}]{3,25}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                surnameErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
                clientErrPara.style.display = 'none'
            } else { surnameErrPara.style.display = 'block' }
        })
    }
    telValidationFunction() {
        var tel = document.getElementById('tel')
        var telErrPara = document.getElementById("tel-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        tel.addEventListener('input', function (e) {
            var pattern = /^(?:[\d]{9}|[\d]{3}-[\d]{3}-[\d]{3}|[\d]{3}\ [\d]{3}\ [\d]{3})$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                telErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { telErrPara.style.display = 'block' }
        })
    }
    emailValidationFunction() {
        var email = document.getElementById('email')
        var emailErrPara = document.getElementById("email-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        var clientErrPara = document.getElementById("client-err");
        email.addEventListener('input', function (e) {
            var pattern = /^[\d\w/.]{1,}@[\w\d]{1,}\.[\w\d]{1,}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                emailErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
                clientErrPara.style.display = 'none'
            } else { emailErrPara.style.display = 'block' }
        })
    }
    stateValidationFunction() {
        var state = document.getElementById('state')
        var stateErrPara = document.getElementById("state-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        state.addEventListener('input', function (e) {
            var pattern = /^[\s\p{L}]{3,25}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                stateErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { stateErrPara.style.display = 'block' }
        })
    }
    streetValidationFunction() {
        var street = document.getElementById('street')
        var streetErrPara = document.getElementById("street-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        street.addEventListener('input', function (e) {
            var pattern = /^[\s\d/\p{L}]{3,25}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                streetErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { streetErrPara.style.display = 'block' }
        })
    }
    cityValidationFunction() {
        var city = document.getElementById('city')
        var cityErrPara = document.getElementById("city-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        city.addEventListener('input', function (e) {
            var pattern = /^[\s\p{L}]{3,25}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                cityErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { cityErrPara.style.display = 'block' }
        })
    }
    zipValidationFunction() {
        var zip = document.getElementById('zip')
        var zipErrPara = document.getElementById("zip-err");
        var notNullFieldsErrPara = document.getElementById("notNullFields-err");
        zip.addEventListener('input', function (e) {
            var pattern = /^[\d]{2}-[\d]{3}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                zipErrPara.style.display = 'none'
                notNullFieldsErrPara.style.display = 'none'
            } else { zipErrPara.style.display = 'block' }
        })
    }
    childrenValidationFunction() {
        var children = document.getElementById('children')
        var childrenErrPara = document.getElementById("children-err");
        children.addEventListener('input', function (e) {
            var pattern = /^[\d]{0,2}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                childrenErrPara.style.display = 'none'
            } else { childrenErrPara.style.display = 'block' }
        })
    }
    ageValidationFunction() {
        var age = document.getElementById('age')
        var ageErrPara = document.getElementById("age-err");
        age.addEventListener('input', function (e) {
            var pattern = /^[\d]{0,2}$/;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                ageErrPara.style.display = 'none'
            } else { ageErrPara.style.display = 'block' }
        })
    }
    jobValidationFunction() {
        var job = document.getElementById('job')
        var jobErrPara = document.getElementById("job-err");
        job.addEventListener('input', function (e) {
            var pattern = /^[\s/ \p{L}]{0,30}$/u;
            var currentValue = e.target.value;
            if (pattern.test(currentValue)) {
                jobErrPara.style.display = 'none'
            } else { jobErrPara.style.display = 'block' }
        })
    }
    cancel() {
        this.props.history.push('/iteminfo');
    }

    render() {
        return (
            <div>
                <div className="tlo_color_fixed" className="container">
                    <div className="row" >
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Client to Application:</h3>
                            <div classname="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Client Name*: </label>
                                        <input placeholder="Client Name" id="name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                        <p id="name-err"> Please enter a vaild name ( min 3, max 25 letters) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Surname*: </label>
                                        <input placeholder="Surname" id="surname" name="surname" className="form-control" value={this.state.surname} onChange={this.changeSurnameHandler} />
                                        <p id="surname2-err"> Please enter a vaild surname ( min 3, max 25 letters) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> TelephoneNumber*: </label>
                                        <input placeholder="TelephoneNumber" id="tel" name="telephoneNumber" className="form-control" value={this.state.price} onChange={this.changeTelephoneNumberHandler} />
                                        <p id="tel-err"> Please enter a telephone number ( xxxyyyzzz / xxx-yyy-zzz / xxx yyy zzz format) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Email*: </label>
                                        <input placeholder="Email" id="email" name="email" className="form-control" value={this.state.url} onChange={this.changeEmailHandler} />
                                        <p id="email-err"> Please enter a vaild email</p>
                                    </div>
                                    <div className="form-group">
                                        <label> State*: </label>
                                        <input placeholder="State" id="state" name="state" className="form-control" value={this.state.state} onChange={this.changeStateHandler} />
                                        <p id="state-err"> Please enter a vaild state ( min 3, max 25 letters) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Address*: </label>
                                        <input placeholder="Street" id="street" name="street" className="form-control" value={this.state.street} onChange={this.changeStreetHandler} />
                                        <p id="street-err"> Please enter a vaild address ( min 3, max 25 letters) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> City*: </label>
                                        <input placeholder="City" id="city" name="city" className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                                        <p id="city-err"> Please enter a vaild city ( min 3, max 25 letters) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Zip*: </label>
                                        <input placeholder="Zip" id="zip" name="zip" className="form-control" value={this.state.zip} onChange={this.changeZipHandler} />
                                        <p id="zip-err"> Please enter a vaild zip code ( xx-yyy format ) </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Number Of Children: </label>
                                        <input placeholder="Number Of Children" id="children" name="numberOfChildren" className="form-control" value={this.state.numberOfChildren} onChange={this.changenumberOfChildrenHandler} />
                                        <p id="children-err"> Please enter a vaild number of children </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Age: </label>
                                        <input placeholder="Age" id="age" name="age" className="form-control" value={this.state.age} onChange={this.changeAgeHandler} />
                                        <p id="age-err"> Please enter a vaild age </p>
                                    </div>
                                    <div className="form-group">
                                        <label> Job: </label>
                                        <input placeholder="Job" id="job" name="job" className="form-control" value={this.state.job} onChange={this.changeJobHandler} />
                                        <p id="job-err"> Please enter a vaild job ( min 3, max 25 letters ) </p>
                                    </div>
                                    <p id="notNullFields-err"> Please fill all fields marked as * </p>
                                    <p id="client-err"> This client already exists</p>
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
