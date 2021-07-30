import React from "react";

class ContentEditor extends React.Component {
    constructor(props) {
        super(props);
        let content = [1, 2]
        this.state = {
            columnContent: content,//No real uses in code. Interchangeable from empty array, so it may be here for saving purposes
            columnOptions: ["", ""],
            emptyArray: [0, 1],
            content: ["IP Address", "IP Address"],
            template: "Table"
        }
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
        this.saveContent = this.saveContent.bind(this);
        this.changeTemplate = this.changeTemplate.bind(this);
        this.onTabChanged = this.onTabChanged.bind(this);
    }

    componentWillUnmount() {
        // this.props.saveNewData(this.state.columnContent, this.state.content);
    }

    saveContent(event, key) {
        let updatedContent = this.state.content;
        updatedContent[key - 1] = event.target.value;
        this.setState({
            content: updatedContent
        });
    }

    isSelected(key, compare) {
        let content = this.state.content[key - 1];
        if (compare === content) {
            return <option value={compare} selected>{compare} </option>
        }
        return <option value={compare}>{compare}</option>
    }

    onTabChanged(number, event) {
        let selection = event.target.value;
        let f = this.state.columnOptions;
        console.log(f)
        if (selection === "Bridge") {
            f[number] = <div className={"solutionList"}>
                <div>
                    <input type="checkbox" id="topping" name="topping" value="Paneer"/>forward
                </div>
                <div>
                    <input type="checkbox" id="topping" name="topping" value="Paneer"/>flood
                </div>
            </div>;
        } else if (selection === "Router") {
            f[number] = <div className={"solutionList"}>
                <div>
                    <input type="checkbox" id="topping" name="topping" value="Paneer"/>forward
                </div>
                <div>
                    <input type="checkbox" id="topping" name="topping" value="Paneer"/>receive packet
                </div>
                <div>
                    <input type="checkbox" id="topping" name="topping" value="Paneer"/>arp request/reply
                </div>

            </div>;
        } else if (selection === "Host") {
            f[number] =
                <div className={"solutionList"}>
                    <div>
                        <input type="checkbox" id="topping" name="topping" value="Paneer"/>send-packet
                    </div>
                    <div>
                        <input type="checkbox" id="topping" name="topping" value="Paneer"/>receive packet
                    </div>
                    <div>
                        <input type="checkbox" id="topping" name="topping" value="Paneer"/>receive and ignore
                    </div>
                    <div>
                        <input type="checkbox" id="topping" name="topping" value="Paneer"/>echo
                    </div>
                    <div>
                        <input type="checkbox" id="topping" name="topping" value="Paneer"/>request/reply
                    </div>
                    <div>
                        <input type="checkbox" id="topping" name="topping" value="Paneer"/>arp request/reply
                    </div>

                </div>;
        }
        this.setState({
            columnOptions: f
        })
    }

    renderColumnContent() {
        let content = this.state.emptyArray
        console.log("Comping")
        console.log(this.state.template);
        // All the Rows are the same
        if (this.state.template === "Table") {
            return content.map((number) =>
                <div>
                    <select className={"column"} key={number} name="Templates" id="Templates"
                            onChange={(e) => this.onTabChanged(number, e)}
                            onSelect={(e) => this.saveContent(number, e)}>
                        {this.isSelected(number, "-")}
                        {this.isSelected(number, "Mac")}
                        {this.isSelected(number, "Port")}
                        {this.isSelected(number, "Vlan")}
                    </select>
                </div>
            );
        } else if (this.state.template === "Answer") {
            return content.map((number) =>
                <div className={"solutionColumn"}>
                    <select className={"column"} key={number} name="Templates" id="Templates"
                            onChange={(e) => this.onTabChanged(number, e)}>
                        {this.isSelected(number, "-")}
                        {this.isSelected(number, "Host")}
                        {this.isSelected(number, "Bridge")}
                        {this.isSelected(number, "Router")}
                    </select>
                    {this.state.columnOptions[number]}
                </div>
            );
        }
    }

    append(event) {
        var a = this.state.columnContent;
        var s = this.state.columnOptions;
        var f = this.state.emptyArray;
        a.push(a.length + 1)
        s.push("");
        f.push(f.length + 1);
        this.setState({
            columnContent: a,
            columnOptions: s,
            emptyArray: f
        })
        this.renderColumnContent();
    }

    pop(event) {
        var a = this.state.columnContent;
        if (a.length !== 1) {
            a.pop();
            this.setState({
                columnContent: a
            });
            this.renderColumnContent();
        }
    }

    changeTemplate(event) {
        this.setState({
            template: event.target.value
        })
        console.log(event.target.value);
        this.renderColumnContent();
    }


    /*
    Second Column is the action from the first: in answer manager. Check Marks would be a static set of actions.
    Host -> send packet
    col1     col2
   TODO Each action has a set of fields that can be toggled on or off EX: Send Packet -> source mac, dest mac, source IP, dest IP
  TODO Only Table Manager can add Tabs
     */
    render() {
        return (
            <React.Fragment>

                <div className="centerInput">
                    <label className="labelClass">Problem Solution</label>

                </div>
                <select className={"column"} name="Templates" id="Templates" onChange={this.changeTemplate}>
                    <option value="Answer" selected>Answer Manager</option>
                    <option value="Table" selected>Table Manager</option>
                </select>
                <label className="CheckboxList">
                    <input type="checkbox" checked="checked"/>
                    <span className="checkmark"></span>
                    Can add Tabs? </label>
                <div className="problemSelector">
                    <div className="blocked">

                        <button className="Append" onClick={() => this.append()}>
                            +
                        </button>
                        <button className="Append" onClick={() => this.pop()}>
                            -
                        </button>
                    </div>

                    {this.renderColumnContent()}
                </div>
            </React.Fragment>
        )
    }
}

export default ContentEditor
