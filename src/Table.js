import React from "react";

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
        this.state = {
            columns: [1, 2,],
        }
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

    tableOptions() {
        return <select className={"headerSelector"}>
            <option value={"IP Address"}>"IP Address"</option>
            <option value={"MAC Address"}>MAC Address</option>
            <option value={"VLAN"}>VLAN</option>
            <option value={"Router"}>Router</option>
            <option value={"Gateway"}>Gateway</option>
        </select>
    }

    renderRowsSelection(rows) {
        let r = [<th scope="col">{this.tableOptions()} </th>];
        for (let i = 0; i < rows - 1; i++) {
            r.push(<th scope="col">{this.tableOptions()} </th>);
        }
        return r;
    }

    renderRows(rows) {
        let r = [<td>00:1A:C2:7B:00:47</td>];
        for (let i = 0; i < rows - 1; i++) {
            r.push(<td>00:1A:C2:7B:00:47</td>);
        }
        return <tr>{r}</tr>;
    }

    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default Table;