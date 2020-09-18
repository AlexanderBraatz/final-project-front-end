import React, { Component } from "react";

class Form extends Component{
    constructor(props){
       super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
    

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleName(e) {
        this.setState({ name: e.currentTarget.value, });
    };

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value, });
    };

    handlePassword(e) {
        this.setState({ password: e.currentTarget.value, });
    };

    handleFormSubmit(e) {
        
        e.preventDefault();

    };



    render() {
        let {name, email, password }  = this.state;

        return (
            <>
            <h2 className="word-heading">Sign up</h2>
            <form onSubmit={ this.handleFormSubmit } className="form">
                {/* <div className="form-elements"> */}
                    <label for='name'>Name</label>
                    <input type="text" id="name"  onChange={ this.handleName } value={ name } />
                
                    <label for="email">E-mail</label>
                    <input type="email" id="email" onChange={ this.handleEmail } value={ email } />
                
                    <label for="password">Password</label>
                    <input type="password" id="password"  onChange={ this.handlePassword } value={ password } />
                

                <button type="submit">Submit</button>
            </form>
            </>
        );
    }
}

export default Form;