import React from "react";
import Editor from "./Editor";
import ReactDOM from 'react-dom';
import ImageOnly from "./ImageOnly";

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

//TODO They will have a pool to choose from data btw. So make drop down boxes include that
// TODO Everything will be given from db;
    saveParentDataFunction(id, data) {
        let updatedTemplate = this.state.templates
        data["identifier"] = id;
        updatedTemplate[id - 1] = <Editor saveFinalData={this.saveParentDataFunction} data={data}/>
        this.setState({
            templates: updatedTemplate
        });
        console.log("uptop...." + id + "...." + data.inspect);
    }

    goToView(identifier) {
        let template = this.state.templates[identifier - 1];
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
        templates.push(<Editor saveFinalData={this.saveParentDataFunction} data={data}/>)
        this.setState({
            templateId: buttons,
            templates: templates
        })
        this.renderViews();
       // this.saveAll()

    }

    saveAll() {
        let templates = this.state.templates;
        let body = {};
        for (let i = 0; i < templates.length; templates++) {
            let t = templates[i];
            let tableFormat = t.state.template;
            let editor = tableFormat.getTemplate();
            let tableHolders = editor.getTableHolders();
            let bottomLeftTables = tableHolders.bottomLeftTable.getTables();
            let bottomRightTables = tableHolders.bottomRightTable.getTables();
            let rightTables = tableHolders.rightTable.getTables();
            let brt = {};
            let rt = {};
            let blt = {};
            for (let i = 0; i < bottomLeftTables.length; i++) {
                let table = bottomLeftTables[i];
                let preset = table.state.tableElements;
                let columnCount = table.state.columns.length;
                blt.push({"present": preset, "columnCount": columnCount, "name": "TO_BE_ADDED"})
            }
            for (let i = 0; i < bottomRightTables.length; i++) {
                let table = bottomLeftTables[i];
                let preset = table.state.tableElements;
                let columnCount = table.state.columns.length;
                brt.push({"present": preset, "columnCount": columnCount, "name": "TO_BE_ADDED"})
            }
            for (let i = 0; i < rightTables.length; i++) {
                let table = bottomLeftTables[i];
                let preset = table.state.tableElements;
                let columnCount = table.state.columns.length;
                rt.push({"present": preset, "columnCount": columnCount, "name": "TO_BE_ADDED"})
            }
            body.push({
                "template": tableFormat, "Tables": {
                    "BottomRightTables": brt,
                    "BottomLeftTables": blt,
                    "RightTable": rt
                }
            })
        }

    }

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
                {this.renderViews()}
            </React.Fragment>
        )
    }
}

export default LeftSelector
