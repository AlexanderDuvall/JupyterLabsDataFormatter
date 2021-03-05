import React from "react";
import Table from "./Table";

class TableHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
    }

    append() {
        let tables = this.state.list;
        let k = tables.length - 1
        tables.push({"table": <Table/>, "number": k});
        this.setState({
            list: tables
        });
        console.log("appending to holder" + this.state.list.length);
        this.reKey();
    }

    reKey() {
        let tables = this.state.list;
        for (let i = 0; i < tables.length; i++) {
            tables.number = i;
        }
        this.setState({
            list:tables
        });
    }

    pop(index) {
        let tables = this.state.list;
        tables.splice(index, 1);
        this.reKey();
        this.setState({
            list: tables
        })
        console.log("popping @ " +index);
    }

    render() {
        return (
            <React.Fragment>
                <button className="tableAppend" onClick={() => this.append()}>
                    Append Table
                </button>
                {this.state.list.map(d => (
                    <li className="list-unstyled">
                        <div className="appendBar">
                            {d.table}
                            <button className="tablePop" onClick={() => this.pop(parseInt(d.number+1))}>
                                -
                            </button>
                        </div>
                    </li>
                ))}
            </React.Fragment>
        )
    }

}

export default TableHolder
