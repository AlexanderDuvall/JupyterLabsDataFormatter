import React from "react";
import Editor from "./Editor";
import ReactDOM from 'react-dom';
import ImageOnly from "./ImageOnly";

class LeftSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: {},
            templateId: [],
            saveData: ""
        }
        this.goToView = this.goToView.bind(this);
        this.addTemplate = this.addTemplate.bind(this);
        this.goToView = this.goToView.bind(this);
        this.saveParentDataFunction = this.saveParentDataFunction.bind(this);
        this.SaveToFile = this.SaveToFile.bind(this);
    }

// TODO They will have a pool to choose from data btw. So make drop down boxes include that
// TODO Everything will be given from db;
// TODO Add list of templates
//
    saveParentDataFunction(id, data) {
        let updatedTemplate = this.state.templates
        updatedTemplate[id - 1] = <Editor saveFinalData={this.saveParentDataFunction} data={data}/>
        this.setState({
            templates: updatedTemplate
        });
        console.dir("uptop...." + id + "....");
        let finalData = JSON.stringify(data, null, 4);
        this.setState({
            saveData:finalData
        })
        console.log(JSON.stringify(data, null, 4))
    }

    SaveToFile(event) {
        const element = document.createElement("a");
        const file = new Blob([this.state.saveData], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "test.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    goToView(identifier) {
        let template = this.state.templates[identifier];
        console.log("rendering " + identifier);
        ReactDOM.render(template, document.getElementById("right"));
    }

    renderViews() {
        let list = this.state.templateId;
        const items = list.map((number) =>
            <div>
                <button key={number} className={"problemButton"} onClick={this.goToView.bind(this, number)}>
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
        //buttons.push(len);
        if (buttons.length === 0) {
            buttons = [1];
        } else {
            buttons.push(len);
        }
        let data = {
            template: <ImageOnly/>,
            columnContent: [],
            content: [],
            identifier: len
        }
        console.log("sending KEY: " + len);
        console.log(buttons);
        templates[len] = <Editor saveFinalData={this.saveParentDataFunction} data={data}/>
        this.setState({
            templateId: buttons,
            templates: templates
        })
        this.renderViews();
    }
//TODO add template title to list
    render() {
        return (
            <React.Fragment>
                <div className={"appendBar"}>
                    <input type="text" name="Title" className={"inputBoxLong"} placeholder={"Title"}
                           onChange={this.onTitleChange} value={this.state.title}/>
                    <button className={"appendButton"} onClick={this.addTemplate}>
                        <h5>+</h5>
                    </button>
                </div>
                <div>
                    <button className={"problemButton"} onClick={this.SaveToFile}>
                        Save
                    </button>
                </div>
                {this.renderViews()}
            </React.Fragment>
        )
    }
}

export default LeftSelector
