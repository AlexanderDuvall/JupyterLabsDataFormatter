import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./Table";

export class BottomRightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                    <div className="graphicsSelector">
                        <div className="routerImageBottom">
                            <img
                                src="https://img-en.fs.com/community/wp-content/uploads/2017/10/How-routers-route-packets-from-the-source-to-the-destination.jpg"/>
                        </div>
                        <div className="TableDiv">
                            <Table/>
                        </div>
                    </div>
                    <div className="sideBySide">
                        <div className="TableDivBottom BottomLeft">
                            <Table/>
                        </div>
                        <div className="TableDivBottom BottomRight">
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

export default BottomRightTable