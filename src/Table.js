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
        this.updateColumnSelection = this.updateColumnSelection.bind(this);
        this.state = {
            type: "",
            columns: [1],
            tableElements: "-",
            columnData: {1: "-"}
        }
        this.tableOptions("Host");
    }

//TODO Save JSON to file. Any extension

    renderTable() {
        let label = "Table"
        let data = {};
        data[label] = {
            "type": this.state.type,
            "columns": this.state.columns.length,
            "tableElements": this.state.columnData
        }
        this.props.savedata(this.props.tableKey, data);
        console.log("slinning");
        console.log(data);
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
        let label = "Table"
        let data = {};
        data[label] = {
            "type": this.state.type,
            "columns": this.state.columns.length,
            "tableElements": this.state.columnData
        }
        this.props.savedata(this.props.tableKey, data)
    }

    append(e) {
        let a = this.state.columns;
        if (a.length !== 4) {
            a.push(a.length + 1);
            this.setState({
                columns: a
            })
            let colData = this.state.columnData;
            colData[a.length] = "-"
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

    tableOptions(type, i) {
        switch (type) {
            case "Bridge":
                return <select className={"headerSelector"} onChange={(e) => this.updateColumnSelection(e, i)}>
                    <option value={"None"}>-</option>
                    <option value={"IP Address"}>1IP Address</option>
                    <option value={"MAC Address"}>MAC Address</option>
                    <option value={"VLAN"}>VLAN</option>
                    <option value={"Router"}>Router</option>
                    <option value={"Gateway"}>Gateway</option>
                </select>
            case "Host":
                return <select className={"headerSelector"} onChange={(e) => this.updateColumnSelection(e, i )}>
                    <option value={"None"}>-</option>
                    <option value={"IP Address"}>2IP Address</option>
                    <option value={"MAC Address"}>MAC Address</option>
                    <option value={"VLAN"}>VLAN</option>
                    <option value={"Router"}>Router</option>
                    <option value={"Gateway"}>Gateway</option>
                </select>
            case "Router":
                return <select className={"headerSelector"} onChange={(e) => this.updateColumnSelection(e, i  )}>
                    <option value={"None"}>-</option>
                    <option value={"IP Address"}>3IP Address</option>
                    <option value={"MAC Address"}>MAC Address</option>
                    <option value={"VLAN"}>VLAN</option>
                    <option value={"Router"}>Router</option>
                    <option value={"Gateway"}>Gateway</option>
                </select>
            case "Gateway":
                return <select className={"headerSelector"} onChange={(e) => this.updateColumnSelection(e, i  )}>
                    <option value={"None"}>-</option>
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
        let type = this.state.type;
        let r = [<th scope="col">{this.tableOptions(type, 1)} </th>];
        for (let i = 1; i < rows; i++) {
            r.push(<th scope="col">{this.tableOptions(type, i+1 )} </th>);
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

    updateColumnSelection(e, key) {
        let value = e.target.value
        let hash = this.state.columnData;
        hash[key] = value;
        this.setState({
            columnData: hash
        });
        console.log("COLUMN UPDASTEING")
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
