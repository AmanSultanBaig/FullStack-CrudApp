import React, { Component } from 'react'
import UserDataService from "../service/user.service";
class AddUser extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);

        this.state = {
            id: null,
            name: "",
            email: "",
            age: "",
            phone: "",

            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    saveUser() {
        var data = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            phone: this.state.phone,
        };

        UserDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    age: response.data.age,
                    phone: response.data.phone,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newUser() {
        this.setState({
            id: null,
            name: "",
            email: "",
            age: "",
            phone: "",

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newUser}>
                            Add
                </button>
                    </div>
                ) : (
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="title">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                    name="title"
                                    placeholder="Name"
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="description">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    name="description"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    required
                                    value={this.state.age}
                                    onChange={this.onChangeAge}
                                    name="age"
                                    placeholder="Age"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    required
                                    value={this.state.phone}
                                    onChange={this.onChangePhone}
                                    name="phone"
                                    placeholder="Phone"
                                />
                            </div>

                            <button onClick={this.saveUser} className="btn btn-success">
                                Submit
                </button>
                        </div>
                    )}
            </div>
        );
    }
}
export default AddUser
