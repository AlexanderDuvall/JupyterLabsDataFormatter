import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

var editor;

export class Editor extends React.Component {
    constructor(props) {
        super(props);
        var a = 'pidd'
        editor = this;
        this.state = {
            columns: 0,
            rows: 0,
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="rightBody">
                    <form>
                        <h3 className={"centerText"}>Title</h3>
                        <div className={"centerInput"}>
                            <input type="text" name="Title" className={"inputBoxLong"} placeholder={"Title"}/>
                        </div>
                        <br/>
                        <h3 className={"centerText"}>Problem Info</h3>
                        <div className="graphicsSelector">
                            <div className="routerImage">
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
                        <div className={"centerInput"}>
                            <label className={"labelClass"}>Problem Statement</label>
                            <input type={"text"} name={"problemStatement"} className={"inputBoxLong"}
                                   placeholder={"Problem Statement"}/>
                        </div>
                        <label className={"centerText"}>Problem Solution</label>
                    </form>


                </div>
            </React.Fragment>
        )
    };
}

export default Editor;