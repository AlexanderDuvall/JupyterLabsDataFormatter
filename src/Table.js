import React from "react";
//TODO above image add image options with things like show graph... Add renderer, change image etc.
//TODO Save to JSON file or just a file
//Add Tabs to solution set

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
        this.changeSelection = this.changeSelection.bind(this);
        this.state = {
            type: "",
            columns: [1, 2,],
            tableElements: "-"
        }
        this.tableOptions("Host");
    }


    renderTable() {
        return <table className="tableSpacing">
            <thead>
            <tr>
                {this.renderRowsSelection(this.state.columns.length)}
            </tr>
            </thead>
            <tbody>
            {this.renderRows(this.state.columns.length)}
            </tbody>
        </table>

    }

    changeSelection(e) {
        let type = e.target.value;
        let elements = this.tableOptions(type)
        console.log("changing selection: " + type);
        this.setState({
            type: type,
            tableElements: elements
        })
    }

    componentWillUnmount() {
        let data = {
            "Table": {
                "type": this.state.type,
                "columns": this.state.columns,
                "tableElements": this.state.tableElements
            }
        }
        this.props.savedata(this.props.number, data)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let data = {
            "Table": {
                "type": this.state.type,
                "columns": this.state.columns,
                "tableElements": this.state.tableElements
            }
        }
        this.props.savedata(this.props.number, data)
    }

    append(e) {
        let a = this.state.columns;
        if (a.length !== 4) {
            a.push(a.length + 1);
            this.setState({
                columns: a
            })
            //rerender here
            this.renderTable();
        }
    }

    pop(e) {
        let a = this.state.columns;
        console.log("popping: " + a.length);
        if (a.length !== 1) {
            a.pop();
            this.setState({
                columns: a
            })
            //rerender here
            this.renderTable();
        }
    }

    tableOptions(type) {
        switch (type) {
            case "Bridge":
                return <select className={"headerSelector"}>
                    <option value={"IP Address"}>1IP Address</option>
                    <option value={"MAC Address"}>MAC Address</option>
                    <option value={"VLAN"}>VLAN</option>
                    <option value={"Router"}>Router</option>
                    <option value={"Gateway"}>Gateway</option>
                </select>
            case "Host":
                return <select className={"headerSelector"}>
                    <option value={"IP Address"}>2IP Address</option>
                    <option value={"MAC Address"}>MAC Address</option>
                    <option value={"VLAN"}>VLAN</option>
                    <option value={"Router"}>Router</option>
                    <option value={"Gateway"}>Gateway</option>
                </select>
            case "Router":
                return <select className={"headerSelector"}>
                    <option value={"IP Address"}>3IP Address</option>
                    <option value={"MAC Address"}>MAC Address</option>
                    <option value={"VLAN"}>VLAN</option>
                    <option value={"Router"}>Router</option>
                    <option value={"Gateway"}>Gateway</option>
                </select>
            case "Gateway":
                return <select className={"headerSelector"}>
                    <option value={"IP Address"}>4IP Address</option>
                    <option value={"MAC Address"}>MAC Address</option>
                    <option value={"VLAN"}>VLAN</option>
                    <option value={"Router"}>Router</option>
                    <option value={"Gateway"}>Gateway</option>
                </select>
            default:
                return "-"
        }

    }

    renderRowsSelection(rows) {
        let r = [<th scope="col">{this.state.tableElements} </th>];
        for (let i = 0; i < rows - 1; i++) {
            r.push(<th scope="col">{this.state.tableElements} </th>);
        }
        return r;
    }

    renderRows(rows) {
        let r = [<td className={"tdFormat"}>00:1A:C2:7B:00:47</td>];
        for (let i = 0; i < rows - 1; i++) {
            r.push(<td className={"tdFormat"}>00:1A:C2:7B:00:47</td>);
        }
        return <tr>{r}</tr>;
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="tablePadding">
                        <select className={"headerSelector"} onChange={this.changeSelection}>
                            <option value={"default"}>Select</option>
                            <option value={"Router"}>Router</option>
                            <option value={"Host"}>Host</option>
                            <option value={"Bridge"}>Bridge</option>
                            <option value={"Gateway"}>Gateway</option>
                        </select>
                        <input type={"text"} name={"problemStatement"} className={"tableInputBox"}
                               placeholder={"Table Title"}/>
                    </div>
                    <div className="appendBar">
                        <div className="blocked">
                            <button className="Append" onClick={() => this.append()}>
                                +
                            </button>
                            <button className="Append" onClick={() => this.pop()}>
                                -
                            </button>
                        </div>
                        {this.renderTable()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Table;
