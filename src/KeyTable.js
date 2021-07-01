import React from "react";
import {Button, Modal} from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";

class KeyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableValues: [], //hold drop down values
            tableKeys: this.getKeysFromDB(), //holds database keys
            modalKeys: [], //holds key data
            showModal: false,
            title: [],
            body: <React.Fragment><h1>asdf</h1></React.Fragment>
        }
        this.removeObjFromArray = this.removeObjFromArray.bind(this);
        this.addRow = this.addRow.bind(this);
        this.constructOptions = this.constructOptions.bind(this);
        this.changeOption = this.changeOption.bind(this);
        this.constructDropdown = this.constructDropdown.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.unHideModal = this.unHideModal.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.buildModalData = this.buildModalData.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    hideModal() {
        this.setState({showModal: false});
    }

    showModal(i) {
        console.log("Showing the modal " + this.state.showModal);
        return (
            <Modal show={this.state.showModal} onHide={() => this.hideModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.state.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.hideModal()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    removeObjFromArray(index) {
        let variables = this.state.tableValues;
        variables.splice(index, 1)
        this.constructTable();
        this.save();
    }

    addRow() {
        let variables = this.state.tableValues;
        let variableKeys = this.state.modalKeys;
        let titles = this.state.title;
        variables.push(["Host"])
        variableKeys.push(this.buildKeys())
        titles.push("");
        this.setState({
            tableValues: variables,
            modalKeys: variableKeys,
            title: titles
        })
        this.constructTable();
        this.save()
    }

    getKeysFromDB() {
        return ["Render", "Option1", "Option2"]
    }

    buildKeys() {
        return {Render: false, Option1: false, Option2: false}
    }

    changeOption(e, index) {
        let v = this.state.tableValues;
        v[index] = this.constructDropdown(e.target.value.toString(), index);
        this.setState({
            tableValues: v
        });
        this.constructTable();
        // this.constructDropdown(this.state.tableValues[index])
        this.save()
    }


    save() {
        let list = this.state.title;
        let data = {};
        let modalKeys = this.state.modalKeys;
        let identifiers = this.state.tableValues
        for (let i = 0; i < list.length; i++) {
            let s = modalKeys[i];
            data[list[i]] = {KeyData: s, Identifier: identifiers[i]};
        }
        console.log(data);
        this.props.saveKeyData(data, this.props.reference);
    }

    constructOptions(i) {
        return <select onChange={(e) => this.changeOption(e, i)}
                       className={"headerSelector"}>
            <option selected value={"-"}>-</option>
            <option value={"host"}>Host</option>
            <option value={"bridge"}>Bridge</option>
            <option value={"gateway"}>Gateway</option>
            <option value={"router"}>Router</option>
        </select>
    }

    onToggle(e, index, key) {
        let list = this.state.modalKeys;
        if (list[index][key] == false) {
            list[index][key] = true;
            console.log("Setting True");
        } else {
            console.log("Setting false");
            list[index][key] = false;
        }

        console.log("toggled:" + e.target.checked);
        this.setState({
            modalKeys: list
        });
        console.log(list)

        //this.save();
    }

//TODO Fix UI bug where keys don't update
    buildModalData(reference, i) {
        let list = this.state.modalKeys[i];
        let items = [];
        console.log("index...." + i);
        let innerData = (index, key) => {
            let e = <label className="container" key={key}>
                <h4 className={"customCheckmarkLabel"}>{key}</h4>
                <input key={key} type="checkbox" checked={this.state.modalKeys[i][key]}
                       onChange={(e) => this.onToggle(e, i, key)}/>
                <span checked={this.state.modalKeys[i][key]} className="checkmark"></span>
            </label>
            return e;
        }

        Object.keys(list).forEach(function (key) {
            let e = innerData(i, key);
            items.push(e);
        });
        return items;
    }

    unHideModal(i) {
        let body = <React.Fragment>
            {this.buildModalData(this, i)}
        </React.Fragment>;
        this.setState(
            {
                showModal: true,
                body: body,
             }
        );
    }

    constructDropdown(param, index) {
        console.log("constructing with: " + param + "_");
        this.showModal();
        switch (param) {
            case "host":
                console.log("host.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal(index)}>
                    Options
                </button>
            case "bridge":
                console.log("bridge.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal(index)}>
                    Options
                </button>
            case "router":
                console.log("router.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal(index)}>
                    Options
                </button>
            case "gateway":
                console.log("gateway.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal(index)}>
                    Options
                </button>
            default:
                console.log(".....default")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal(index)}>
                    Options
                </button>
        }
    }

    changeInput(e, i) {
        let value = e.target.value;
        let list = this.state.title;
        console.log(list);
        console.log("ffffasd")
        list[i] = value;
        this.setState({
            title: list
        });
        this.save();
    }

    constructTable() {
        let variables = this.state.tableValues;
        let a = [];
        for (let i = 0; i < variables.length; i++) {
            a.push(<tr key={i}>
                <td className={"tdButton"}>
                    <button className="Append" onClick={() => this.removeObjFromArray(i)}>
                        -
                    </button>
                </td>
                <td className={"tdFormat"} key={i + "child_1"}><input placeholder="Give variable a name"
                                                                      onInput={(e) => this.changeInput(e, i)}
                /></td>
                <td key={i + "child_2"}>{this.constructOptions(i)}</td>
                <td key={i + "child_3"}>{variables[i]}</td>
            </tr>);
            console.log("going through matrix:");
        }
        this.setState({
            tablesElements: a
        })
    }

    componentDidMount() {
        this.constructTable();
    }

    render() {
        return (
            <React.Fragment>
                {this.showModal()}
                <div className="keyTable">
                    <div className="imageToggler">
                        <button className="Append appendKey" onClick={() => this.addRow()}>
                            +
                        </button>
                        <div>
                            <h3 id="KeyTableLabel">Key Table</h3>
                            <table className="tableSpacing">
                                <tbody>
                                {this.state.tablesElements}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default KeyTable;
