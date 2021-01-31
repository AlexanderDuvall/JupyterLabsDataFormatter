import React from "react";
import Editor from "./Editor";
import ReactDOM from 'react-dom';

class LeftSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: [],
            templateId: []
        }
        this.goToView = this.goToView.bind(this);
        this.addTemplate = this.addTemplate.bind(this);
        this.goToView = this.goToView.bind(this);
        this.saveParentDataFunction = this.saveParentDataFunction.bind(this);
    }

    componentWillUnmount() {
        let id = this.props.keyComm;
        let hash = this.buildhash();
        this.props.saveFinalData(id, hash);
    }

    saveParentDataFunction(id, data) {
        console.log(1);
        let updatedTemplate = this.state.templates
        console.log(2);
        updatedTemplate[id - 1] = <Editor saveFinalData={this.saveParentDataFunction} key={id}/>
        console.log(3);
        this.setState({
            templates: updatedTemplate
        });
    }

    goToView(identifier) {
        let template = this.state.templates[identifier - 1];
        ReactDOM.render(template, document.getElementById("right"));
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
        let len = buttons.length + 1
        buttons.push(len);
        templates.push(<Editor saveFinalData={this.saveParentDataFunction} key={len}/>)
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