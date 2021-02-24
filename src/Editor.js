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
        let data = this.props.data
        this.state = {
            template: data.template,
            columnContent: data.columnContent,
            content: data.content
        }
        this.saveData = this.saveData.bind(this);
        this.selectTemplateType = this.selectTemplateType.bind(this);
    }

    componentDidMount() {
        let data = this.props.data;
        console.log(data.identifier+".........")
    }

    componentWillUnmount() {
        let id = this.props.data.identifier;
        let hash = this.buildhash();
        console.log(hash);
        this.props.saveFinalData(id, hash);
    }

    selectTemplateType(event) {
        let func = () => {
            let id = this.props.data.identifier;
            let hash = this.buildhash();
            console.log(hash);
            this.props.saveFinalData(id, hash);
            console.log("updating!!! "+id+"...." + this.state.template.type.name);
        }
        let a = event.target.value;
        if (a === "BottomRightTable") {
            this.setState({
                template: <BottomRightTable/>
            })
            func();
        } else if (a === "BottomTable") {
            this.setState({
                template: <BottomTable/>
            })
            func();
        } else if (a === "RightTable") {
            this.setState({
                template: <RightTable/>
            })
            func();
        } else if (a === "ImageOnly") {
            this.setState({
                template: <ImageOnly/>
            })
            func();
        }
    }

    buildhash() {
        let data = {
            template: this.state.template,
            columnContent: this.state.columnContent,
            content: this.state.content
        };
        console.log(data);
        console.log("mhmmm")
        return data;
    }

    saveData(columnContent, content) {
        this.setState({
            columnContent: columnContent,
            content: content
        });

    }

    selected(temp) {
        console.log("comparing..." + this.state.template.type.name)
        if (this.state.template.type.name === temp) {
            return <option value={temp} selected>{temp}</option>
        }
        return <option value={temp}>{temp}</option>
    }

    Selector() {
        let element = <select className={"column"} name="cars" id="cars" onChange={this.selectTemplateType}>
            {this.selected("ImageOnly")}
            {this.selected("BottomRightTable")}
            {this.selected("BottomTable")}
            {this.selected("RightTable")}
        </select>;
        return element;
    }

    render() {
        return (
            <React.Fragment>
                {this.Selector()}
                {this.state.template}
                <ContentEditor saveNewData={this.saveData}/>
            </React.Fragment>
        )
    };
}

export default Editor;