import React from "react"
import {render} from "@testing-library/react";

export class ProblemSolution extends React.Component {
    SolutionElements = [];
    Title = [];

    constructor(props) {
        super(props);
        this.addRow = this.addRow.bind(this);
        this.state = {
            elements: this.SolutionElements,
            title: this.Title
        }
    }

    addRow(props) {
        let rowdata = [];
        let len = props.elementslength;
        for (let i = 0; i < len - 1; i++) {
            rowdata.push(<input type={"text"}/>);
        }
        let elements = <div>
            {rowdata}
        </div>;
        this.SolutionElements.push(elements);
    }

    addTitle(props) {
        let elements = <input type={"text"}/>
        this.Title.push(elements);
    }


    Solution() {
        let elements = <div>
            <button onClick={this.addRow.bind(this, this.props)}>add row</button>
            <button onClick={this.addTitle.bind(this, this.props)}>add title</button>
            <div className={"titles"}>
                {this.Title}
            </div>
            <div className={"Solutions"}>
                {this.SolutionElements}
            </div>
        </div>
    }

    return() {
        render()
    }
}

export default ProblemSolution