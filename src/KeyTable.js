import React from "react";
import {Button, Modal} from "react-bootstrap";

class KeyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableValues: [],
            showModal: false,
            title: "",
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
    }

    hideModal() {
        this.setState({showModal: false});
    }

    showModal() {
        console.log("Showing the modal " + this.state.showModal);
        return (
            <Modal show={this.state.showModal} onHide={() => this.hideModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
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
    }

    addRow() {
        let variables = this.state.tableValues;
        variables.push(["Host"])
        this.constructTable();
    }

    changeOption(e, index) {
        let v = this.state.tableValues;
        console.log("asdfasfasdf");
        console.log(e.target.value.toString());
        console.log(index);
        v[index] = this.constructDropdown(e.target.value.toString());
        this.setState({
            tableValues: v
        });
        this.constructTable();
        // this.constructDropdown(this.state.tableValues[index])
    }

    constructOptions(i) {
        return <select onChange={(e) => this.changeOption(e, i)}
                       className={"headerSelector"}>
            <option selected value={"host"}>Host</option>
            <option value={"bridge"}>Bridge</option>
            <option value={"gateway"}>Gateway</option>
            <option value={"router"}>Router</option>
        </select>
    }

    unHideModal(type, title) {
        let body = <React.Fragment>

            <label className="container">
                <h4 className={"customCheckmarkLabel"}>Option1</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>

            <label className="container">
                <h4 className={"customCheckmarkLabel"}>Option2</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>

            <label className="container">
                <h4 className={"customCheckmarkLabel"}>Option3</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>

            <label className="container">
                <h4 className={"customCheckmarkLabel"}>Option4</h4>
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </React.Fragment>
        this.setState(
            {
                showModal: true,
                body: body,
                title: title
            }
        )
    }

    constructDropdown(param) {
        console.log("constructing with: " + param + "_");
        this.showModal();
        switch (param) {
            case "host":
                console.log("host.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal()}>
                    Options
                </button>
            case "bridge":
                console.log("bridge.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal()}>
                    Options
                </button>
            case "router":
                console.log("router.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal()}>
                    Options
                </button>
            case "gateway":
                console.log("gateway.....")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal()}>
                    Options
                </button>
            default:
                console.log(".....default")
                return <button className={"rightColumnButtons"} onClick={() => this.unHideModal()}>
                    Options
                </button>
        }
    }
    ;

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
                <td className={"tdFormat"} key={i + "child_1"}><input placeholder="Give variable a name"/></td>
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
