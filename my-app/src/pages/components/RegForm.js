import React, {Component} from "react";
import "./RegForm.css"

class RegForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            login: "",
            password:""

        }
        this.submitHandler=this.submitHandler.bind(this)

    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    loginHandler = (event) => {
        this.setState({
            login: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    submitHandler = (event) => {
        alert(`${this.state.login}  Success`)
        console.log(this.state);
        this.setState({
            email: "",
            login: "",
            password: ''
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="form">

                <form onSubmit={this.submitHandler}>
                    <h2>If you want to contact me - Register</h2>
                    <label></label> <input type="text" value={this.state.email} onChange={this.emailHandler} placeholder="Your e-mail" /><br />
                    <label></label> <input type="text" value={this.state.login} onChange={this.loginHandler} placeholder="Your login" /><br />
                    <label></label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Your password" /><br />
                    <input type="submit" value="Register" />
                </form>

            </div>
            
        )
    }
}

export default RegForm