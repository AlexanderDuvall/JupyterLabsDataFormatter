import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import RightTable from "./RightTable";
import BottomTable from "./BottomTable";
import BottomRightTable from "./BottomRightTable";
import ContentEditor from "./ContentEditor";
import ImageOnly from "./ImageOnly";

export class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 0,
            rows: 0,
            template: <ImageOnly/>
        }
        this.selectTemplateType = this.selectTemplateType.bind(this);
    }

    selectTemplateType(event) {
        let a = event.target.value;
        if (a === "L2-BR") {
            this.setState({
                template: <BottomRightTable/>
            })
        } else if (a === "L2-B") {
            this.setState({
                template: <BottomTable/>
            })
        } else if (a === "L2-R") {
            this.setState({
                template: <RightTable/>
            })
        } else {
            this.setState({
                template: <ImageOnly/>
            })
        }
        this.defineTemplate();
        console.log("updating!!!");
    }


    Selector() {
        let element = <select className={"column"} name="cars" id="cars" onChange={this.selectTemplateType}>
            <option value="Image only">Image only</option>
            <option value="L2-BR">L2-BR</option>
            <option value="L2-B">L2-B</option>
            <option value="L2-R">L2-R</option>
        </select>;
        return element;
    }

    defineTemplate() {

        return this.state.template;
    }

    render() {
        return (
            <React.Fragment>
                {this.Selector()}
                {this.defineTemplate()}
                <ContentEditor/>
            </React.Fragment>
        )
    };
}

export default Editor;