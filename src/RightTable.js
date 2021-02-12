import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./Table";


export class RightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [1, 2,],
            title: "",
            probStatement: "",
            showImage: true
        }
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
        this.showImageHandler = this.showImageHandler.bind(this);

    }

    renderTable() {
        return <table className="">
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
        a.push(a.length + 1);
        this.setState({
            columns: a
        })
        //rerender here
        this.renderTable();
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

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    onProbStatementChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    renderRowsSelection(rows) {
        let r = [<th scope="col">{this.tableOptions()} </th>];
        for (let i = 0; i < rows - 1; i++) {
            r.push(<th scope="col">{this.tableOptions()} </th>);
        }
        return r;
    }

    renderRows(rows) {
        let r = [<td>1</td>];
        for (let i = 0; i < rows - 1; i++) {
            r.push(<td>1</td>);
        }
        return <tr>{r}</tr>;
    }

    showImageHandler(event) {
        const target = event.target;
        const value = target.checked;
        this.setState({
            showImage: value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="rightBody">

                    <h3 className={"centerText"}>Title</h3>
                    <div className={"centerInput"}>
                        <input type="text" name="Title" className={"inputBoxLong"} placeholder={"Title"}
                               onChange={this.onTitleChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <h3 className={"centerText"}>Problem Info</h3>
                    <div className={"imageToggler"}>
                        <label className="container">
                            <input type="checkbox"
                                   checked={this.state.showImage}
                                   onChange={this.showImageHandler}/>
                            <span className="checkmark"></span>
                            <h5 className="labelText"> Show Image?</h5>
                        </label>

                    </div>

                    <div className="graphicsSelector">
                        <div className="routerImage">
                            <img className={this.state.showImage ? "routerImage" : "routerImage hidden"}
                                 src="https://img-en.fs.com/community/wp-content/uploads/2017/10/How-routers-route-packets-from-the-source-to-the-destination.jpg"/>
                        </div>
                        <div className="TableDiv">
                            <Table/>
                        </div>
                    </div>

                    <div className={"centerInput"}>
                        <label className={"labelClass"}>Problem Statement</label>
                        <input type={"text"} name={"problemStatement"} className={"inputBoxLong"}
                               placeholder={"Problem Statement"} onChange={this.onProbStatementChange}
                               value={this.state.probStatement}/>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default RightTable;