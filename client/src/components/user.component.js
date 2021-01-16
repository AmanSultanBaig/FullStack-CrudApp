import React, { Component } from 'react'
import UserDataService from '../service/user.service'

class User extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);

        this.getAllUsers = this.getAllUsers.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

        this.state = {
            currentUser: {
                id: null,
                name: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getAllUsers(this.props.match.params.id);
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function (prevState) {
            return {
                currentUser: {
                    ...prevState.currentUser,
                    name: name
                }
            };
        });
    }

    onChangeEmail(e) {
        const email = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                email: email
            }
        }));
    }

    onChangeAge(e) {
        const age = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                age: age
            }
        }));
    }

    onChangePhone(e) {
        const phone = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                phone: phone
            }
        }));
    }

    getAllUsers(id) {
        UserDataService.get(id)
            .then(response => {
                this.setState({
                    currentUser: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateUser() {
        UserDataService.update(
            this.state.currentUser.id,
            this.state.currentUser
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The User was updated successfully!"
                });
                setTimeout(__ => {
                    this.props.history.push('/user-list')
                }, 1000)
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteUser() {
        UserDataService.delete(this.state.currentUser.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/user-list')
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const { currentUser } = this.state;

        return (
            <div>
                {currentUser ? (
                    <div className="edit-form">
                        <h4>User Info</h4>
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="title">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        value={currentUser.name}
                                        onChange={this.onChangeName}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        value={currentUser.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                            </div>
                            <div className="row">

                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Age</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        value={currentUser.age}
                                        onChange={this.onChangeAge}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        value={currentUser.phone}
                                        onChange={this.onChangePhone}
                                    />
                                </div>
                            </div>
                        </form>
                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteUser}
                        >
                            Delete
                </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateUser}
                        >
                            Update
                </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a User...</p>
                        </div>
                    )}
            </div>
        );
    }
}

export default User
