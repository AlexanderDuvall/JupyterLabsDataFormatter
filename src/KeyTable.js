import React from "react";

class KeyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableElements: "",
            tableValues: [["host1", "host"], ["Router1", "router"], ["Bridge2", "Bridge"], ["Gateway", "Gateway"]]
        }
    }

    constructTable() {
        let variables = this.state.tableValues;
        let constructDropdown = (param) => {
            switch (param.toLowerCase()) {
                case "host":
                    return <select className={"headerSelector"}>
                        <option>Host stuff</option>
                    </select>

                case "bridge":
                    return <select className={"headerSelector"}>
                        <option>Bridge stuff</option>
                    </select>
                case "router":
                    return <select className={"headerSelector"}>
                        <option>Router stuff</option>
                    </select>
                case "gateway":
                    return <select className={"headerSelector"}>
                        <option>Gateway stuff</option>
                    </select>
            }
        };
        let a = [];

        for (let i = 0; i < variables.length; i++) {
            a.push(<tr key={i}>
                <td className={"tdFormat"} key={i + "child_1"}>{variables[i][0]}</td>
                <td key={i + "child_2"}>{constructDropdown(variables[i][1])}</td>
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
                <div className={"keyTable"}>
                    <table className="tableSpacing">
                        <h3>Key Table</h3>
                        <tbody>
                        {this.state.tablesElements}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default KeyTable;