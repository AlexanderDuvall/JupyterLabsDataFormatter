import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import RightTable from "./RightTable";
import BottomTable from "./BottomTable";
import BottomRightTable from "./BottomRightTable";
import ContentEditor from "./ContentEditor";
import ImageOnly from "./ImageOnly";


//TODO Add functions to select what tables will be shown, and choose what to display.
//TODO Add template without image.
//TODO
export class Editor extends React.Component {
    constructor(props) {
        super(props);
        let content = []
        this.state = {
            template: <ImageOnly/>,
            columnContent: content,
            content: content
        }
        this.saveData = this.saveData.bind(this);
        this.selectTemplateType = this.selectTemplateType.bind(this);
    }
componentWillUnmount() {
    let id = this.props.keyComm;
    let hash = this.buildhash();
    this.props.saveFinalData(id, hash);
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



    buildhash() {
        let data = {
            template: this.state.template,
            columnContent: this.state.columnContent,
            content: this.state.content
        };
        return data;
    }

    saveData(columnContent, content) {
        console.log("asdfasdf");
        this.setState({
            columnContent: columnContent,
            content: content
        });

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
                <ContentEditor saveNewData={this.saveData}/>
            </React.Fragment>
        )
    };
}

export default Editor;