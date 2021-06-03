import React from "react";
import Table from "./Table";

class TableHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            content: {}
        }

        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
        this.saveParentData = this.saveParentData.bind(this);
    }

    getTables() {
        return this.state.list;
    }

    saveParentData(id, Data) {
        let list = this.state.content;
        let label = "Table-"+String(id);
        list[label] = {Data:Data};
        this.setState({
            content: list
        });
        let data = {
            "Tables": list
        };
        console.log("hoto life");
        console.log(list);
        this.props.saveDataTable(data, this.props.reference);
    }

    append() {
        let tables = this.state.list;
        let dataList = this.state.content;
        let k = tables.length
        tables.push({"table": <Table tableKey={k} savedata={this.saveParentData}/>, "number": k});
        dataList[k] = "";
        this.setState({
            list: tables,
            content: dataList,
        });
        console.log("appending to holder" + this.state.list.length);
        console.log(k);
        this.reKey();
    }

    reKey() {
        let tables = this.state.list;
        for (let i = 0; i < tables.length; i++) {
            tables.number = i;
        }
        this.setState({
            list: tables
        });
        let data = {
            "Tables": this.state.content
        };
        this.props.saveDataTable(data, this.props.reference);
        console.log(data)
        console.log("boonkgang")
    }

    pop(index) {
        let tables = this.state.list;
        tables.splice(index, 1);
        this.reKey();
        this.setState({
            list: tables
        })
        console.log("popping @ " + index);
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
                            <button className="tablePop" onClick={() => this.pop(parseInt(d.number + 1))}>
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
