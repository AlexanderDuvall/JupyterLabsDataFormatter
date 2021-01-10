import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export class BottomRightTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onTitleChange(event){
        this.setState({
            title:event.target.value
        })
    }
    onProbStatementChange(event){
        this.setState({
            title:event.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="rightBody">
                    <form>
                        <h3 className={"centerText"}>Title</h3>
                        <div className={"centerInput"}>
                            <input type="text" name="Title" className={"inputBoxLong"} placeholder={"Title"} onChange={this.onTitleChange} value={this.state.title}/>
                        </div>
                        <br/>
                        <h3 className={"centerText"}>Problem Info</h3>
                        <div className="graphicsSelector">
                            <div className="routerImageBottom">
                                <img src="https://img-en.fs.com/community/wp-content/uploads/2017/10/How-routers-route-packets-from-the-source-to-the-destination.jpg" />
                            </div>
                            <div className="TableDiv">
                                <table className="table table-striped ">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="sideBySide">
                            <div className="TableDivBottom BottomLeft">
                                <table className="table table-striped ">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="TableDivBottom BottomRight">
                                <table className="table table-striped ">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={"centerInput"}>
                            <label className={"labelClass"}>Problem Statement</label>
                            <input type={"text"} name={"problemStatement"} className={"inputBoxLong"}
                                   placeholder={"Problem Statement"} onChange={this.onProbStatementChange} value={this.state.probStatement}/>
                                               </div>
                    </form>
                </div>
            </React.Fragment>
        )
    };
}
export default BottomRightTable