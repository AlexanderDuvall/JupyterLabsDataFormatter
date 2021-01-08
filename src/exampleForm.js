import React from 'react';
import './index.css';

class ExampleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    handleSubmit() {
        console.log("submitting.... in theory");
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    nameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    CustomForm() {
        let elements = <form onSubmit={this.handleSubmit()}>
            <label> Name:
                <input name = "name" type="text" value={this.state.name} onChange={this.nameChange}/>
            </label>
            <label> Password:
                <input name ="password" type="text" value={this.state.password} onChange={this.passwordChange}/>
            </label>
            <input type="submit" value="submit" />
        </form>
        return elements;
    }
}