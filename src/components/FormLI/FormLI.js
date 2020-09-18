import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            succsess: false,
        };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleName(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleEmail(e) {
        this.setState({ email: e.currentTarget.value });
    };

    handlePassword(e) {
        this.setState({ password: e.currentTarget.value })
    }

    
    handleFormSubmit(e) {
        
        e.preventDefault();
        this.props.send({...this.state});
        this.setState({ 
            name: "",
            email: "",
            password: "",
            succsess: true,
        });
        setTimeout(()=>this.setState({ succsess: false, }), 2000);
       
       
    };

    render() {
        // let {name, email, password }  = this.state;

        return (
            <form onSubmit={ this.handleFormSubmit } >
                <div >
                    <label for='name'>Name</label>
                    <input type="text" id="name"  onChange={ this.handleName } value={ this.state.name } />
                </div>

                <div >
                    <label for="email">E-mail</label>
                    <input type="email" id="email" onChange={ this.handleEmail } value={ this.state.email } />
                </div>

                <div >
                    <label for="password">Password</label>
                    <input type="password" id="password"  onChange={ this.handlePassword } value={ this.state.password } />
                </div>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;