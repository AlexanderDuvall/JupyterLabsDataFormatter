import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyTable from "./KeyTable";
import TableHolder from "./TableHolder";

export class BottomRightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFormats: ["default-neato.png", "default-circo.png", "stp-dot.png", "stp-circo-nohost.png", "stp-dot-nohost.png", "stp-neato-nohost.png"],
            showImage: true,
            currentImage: "default-neato.png",
            select: "",
            rightTable: <TableHolder reference={this} saveDataTable={() => this.saveRightTable}/>,
            bottomRightTable: <TableHolder reference={this} saveDataTable={() => this.saveBottomRightTable}/>,
            bottomLeftTable: <TableHolder reference={this} saveDataTable={this.saveBottomLeftTable}/>,
            problemStatement:"",
            contents: {
                "BottomLeft": {},
                "BottomRight": {},
                "RightTable": {}
            }
        };
        this.setupImageArray = this.setupImageArray.bind(this);
        this.showImageHandler = this.showImageHandler.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.saveRightTable = this.saveRightTable.bind(this);
        this.saveBottomRightTable = this.saveBottomRightTable.bind(this);
        this.saveBottomLeftTable = this.saveBottomLeftTable.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onProbStatementChange = this.onProbStatementChange.bind(this);
    }

    saveBottomLeftTable(data, reference) {
        let update = reference.state.contents;
        console.log("111111")
        data["imageformat"] = reference.state.currentImage;
        data["Problem Title"] = reference.state.title
        data["Problem Statement"] = reference.state.problemStatement
        update["BottomLeft"] = data
        console.log(data)
        reference.setState({
            contents: update
        })
        reference.props.saveData(reference.state.contents)
    }

    saveBottomRightTable(data, reference) {
        let update = reference.state.contents;
        console.log("111111")
        update["BottomRight"] = data
        reference.setState({
            contents: update
        })
        reference.props.saveData(reference.state.contents)
    }

    saveRightTable(data, reference) {
        let update = reference.state.contents;
        console.log("111111")
        update["RightTable"] = data
        reference.setState({
            contents: update
        })
        reference.props.saveData(reference.state.contents)
    }


    componentDidMount() {
        this.setupImageArray();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("so it updated...what now?")
        this.props.saveData(this.state.contents)
    }

    componentWillUnmount() {
        this.props.saveData(this.state.contents)
    }

    getCurrentImage() {
        return this.state.currentImage;
    }

    getTableHolders() {
        let th = {
            rightTable: this.state.rightTable,
            bottomRightTable: this.state.bottomRightTable,
            bottomLeftTable: this.state.bottomLeftTable
        }
        return th;
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    onProbStatementChange(event) {
        this.setState({
            problemStatement: event.target.value
        })
    }

    showImageHandler(event) {
        const target = event.target;
        const value = target.checked;
        this.setState({
            showImage: value
        });

    }

    changeImage(event) {
        let val = event.target.value;
        this.setState({
            currentImage: val
        })
    }

    setupImageArray() {
        let images = this.state.imageFormats
        let a = [<option value={images[0]}>{images[0]}</option>];
        for (let i = 1; i < images.length; i++) {
            a.push(<option value={images[i]}>{images[i]}</option>);
        }
        let af = <select className={"headerSelector"}
                         onChange={this.changeImage}>
            {a}
        </select>;
        this.setState({
            select: af
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
                            <div className="tablePadding">
                                <label className="container">
                                    <input type="checkbox"
                                           checked={this.state.showImage}
                                           onChange={this.showImageHandler}/>
                                    <span className="checkmark"></span>
                                    <h5 className="labelText"> Show Image?</h5>
                                </label>
                                {this.state.select}
                            </div>

                            <img className={this.state.showImage ? "routerImage" : "routerImage hidden"}
                                 src={this.state.currentImage}/>
                        </div>
                        <div className="TableDiv">
                            {this.state.rightTable}
                        </div>
                    </div>
                    <div className="sideBySide">
                        <div className="TableDivBottom BottomLeft">
                            {this.state.bottomLeftTable}
                        </div>
                        <div className="TableDivBottom BottomRight">
                            {this.state.bottomRightTable}
                        </div>
                    </div>
                    <KeyTable/>
                    <div className={"centerInput"}>
                        <label className={"labelClass"}>Problem Statement</label>
                        <input type={"text"} name={"problemStatement"} className={"inputBoxLong"}
                               placeholder={"Problem Statement"} onChange={this.onProbStatementChange}
                               />
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

export default BottomRightTable
