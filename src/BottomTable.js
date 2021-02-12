import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./Table";


export class BottomTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            probStatement: "",
            showImage: true
        }
        this.showImageHandler = this.showImageHandler.bind(this);

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
    showImageHandler(event) {
        const target = event.target;
        const value =target.checked;
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
                    <h4>Show Image</h4>
                    <input
                        name="isGoing" type="checkbox"
                        checked={this.state.showImage}
                        onChange={this.showImageHandler}/>
                    <div className="graphicsSelectorBottom">
                        <div className="routerImageBottom">
                            <img className={this.state.showImage? "routerImage": "routerImage hidden"}
                                src="https://img-en.fs.com/community/wp-content/uploads/2017/10/How-routers-route-packets-from-the-source-to-the-destination.jpg"/>
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

export default BottomTable;