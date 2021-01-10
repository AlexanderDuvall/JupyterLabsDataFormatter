import React from "react";
import Editor from "./Editor";
import ReactDOM from 'react-dom';

class LeftSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: [<Editor key={1}/>],
            templateId: [1]
        }
        this.goToView = this.goToView.bind(this);
        this.addTemplate = this.addTemplate.bind(this);
        this.goToView = this.goToView.bind(this);
    }

    goToView(identifier) {
        let template = this.state.templates[identifier-1];
        ReactDOM.render(template,document.getElementById("right"));
    }

    renderViews() {
        let list = this.state.templateId;
        const items = list.map((number) =>
            <div>
                <button key={number} onClick={this.goToView.bind(this, number)}>
                    Problem: {number}
                </button>
            </div>
        );
        return items
    }

    addTemplate(event) {
        let buttons = this.state.templateId;
        let templates = this.state.templates;
        let len = buttons.length+1
        buttons.push(len);
        //TODO: Add a save function so it doesn't lose template data. onChange in the class component may work.
        templates.push(<Editor key={len}/>)
        this.setState({
            templateId: buttons,
            templates: templates
        })
        this.renderViews();
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.addTemplate}>
                        <h5>add template</h5>
                    </button>
                </div>
                {this.renderViews()}
                <h1>ss</h1>
            </React.Fragment>
        )
    }
}

export default LeftSelector