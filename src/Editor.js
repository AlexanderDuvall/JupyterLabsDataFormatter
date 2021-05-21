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
            tableHolderData: {}
        }
        this.selectTemplateType = this.selectTemplateType.bind(this);
        this.saveParentDataFunction = this.saveParentDataFunction.bind(this);
    }

    getTemplate() {
        return this.state.template;
    }

    componentDidMount() {
        let data = this.props.data;
        console.log(data.identifier + ".........")
    }

    componentWillUnmount() {
        let id = this.props.data.identifier;
        let hash = this.buildhash();
        console.log(hash);
        this.props.saveFinalData(id, hash);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let id = this.props.data.identifier;
        let hash = this.buildhash();
        console.log(hash);
        this.props.saveFinalData(id, hash);
        console.log("updating!!! " + id + "...." + this.state.template.type.name);
    }

    selectTemplateType(event) {
        let a = event.target.value;
        if (a === "BottomRightTable") {
            this.setState({
                template: <BottomRightTable saveData = {()=>this.saveParentDataFunction}/>
            })
        } else if (a === "BottomTable") {
            this.setState({
                template: <BottomTable saveData = {()=>this.saveParentDataFunction}/>
            })
        } else if (a === "RightTable") {
            this.setState({
                template: <RightTable saveData = {()=>this.saveParentDataFunction}/>
            })
        } else if (a === "ImageOnly") {
            this.setState({
                template: <ImageOnly saveData = {()=>this.saveParentDataFunction}/>
            })
        }
        console.log("template selected bitch")
    }

    saveParentDataFunction(data) {
        this.setState({
            tableHolderData:data
        })
        let id = this.props.data.identifier;
        let hash = this.buildhash();
        this.props.saveFinalData(id, hash);
        console.log("123455")
    }

    buildhash() {
        let data = {
            template: this.state.template,
            tableHolderData: this.state.tableHolderData
        };
        console.log(data);
        console.log("mhmmm")
        return data;
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
                <ContentEditor/>
            </React.Fragment>
        )
    };
}

export default Editor;
