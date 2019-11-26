import React from 'react';
import axios from 'axios';


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: []
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })

    }

    login(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', { 'email': this.state.email, 'password': this.state.password })

            .then(response => {
                console.log(response.data);
                this.setState({
                    content: response.data.data.token
                });
                const user_token = this.state.content;
                localStorage.setItem("user_token", user_token);
                this.props.parentFunction(user_token)
                window.location.reload(false);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <form onSubmit={this.login}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onChange={this.onChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input onChange={this.onChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-dark">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login