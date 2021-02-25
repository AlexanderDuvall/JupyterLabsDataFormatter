import React from "react";

class KeyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableValues: []
        }
        this.removeObjFromArray = this.removeObjFromArray.bind(this);
        this.addRow = this.addRow.bind(this);
        this.constructOptions = this.constructOptions.bind(this);
        this.changeOption = this.changeOption.bind(this);
        this.constructDropdown = this.constructDropdown.bind(this);
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
        return <select onChange={(e) => this.changeOption(e, i)} className={"headerSelector"}>
            <option selected value={"host"}>Host</option>
            <option value={"bridge"}>Bridge</option>
            <option value={"gateway"}>Gateway</option>
            <option value={"router"}>Router</option>
        </select>
    }

    constructDropdown(param) {
        console.log("constructing with: " + param + "_");
        switch (param) {
            case "host":
                console.log("host.....")
                return <select className={"headerSelector"}>
                    <option>Host stuff</option>
                </select>
            case "bridge":
                console.log("bridge.....")
                return <select className={"headerSelector"}>
                    <option>Bridge stuff</option>
                </select>
            case "router":
                console.log("router.....")
                return <select className={"headerSelector"}>
                    <option>Router stuff</option>
                </select>
            case "gateway":
                console.log("gateway.....")
                return <select className={"headerSelector"}>
                    <option>Gateway stuff</option>
                </select>
            default:
                console.log(".....default")
                return <select className={"headerSelector"}>
                    <option>default stuff</option>
                </select>
        }
    };

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