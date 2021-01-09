import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import RightTable from "./RightTable";
import BottomTable from "./BottomTable";
import BottomRightTable from "./BottomRightTable";

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
            <BottomRightTable/>
            </React.Fragment>
        )
    };
}

export default Editor;