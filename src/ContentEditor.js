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
            template: "Table",
            options: null
        }
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
        this.saveContent = this.saveContent.bind(this);
        this.changeTemplate = this.changeTemplate.bind(this);
        this.onTabChanged = this.onTabChanged.bind(this);
    }

    buildActions() {
        var json = [{
            "action":
                [
                    {
                        "vertex": "bridge",
                        "actions":
                            [
                                {"name": "flood", "data": ["Ports"]},
                                {"name": "forward", "data": ["VLAN"]},
                                {"name": "send-packet", "data": ["Dest. MAC"]}
                            ]
                    },
                    {
                        "vertex": "host",
                        "actions":
                            [
                                {"name": "arp-request", "data": ["Target IP"]},
                                {"name": "arp-reply", "data": ["Source MAC"]},
                                {"name": "dns-request", "data": ["Type", "Nameserver IP", "Value"]},
                                {"name": "dns-response", "data": ["Type", "Value"]},
                                {"name": "echo-request", "data": ["Dest. IP", "Dest. MAC"]},
                                {"name": "echo-reply", "data": ["Dest. IP", "Dest. MAC"]},
                                {"name": "send-packet", "data": ["Dest. MAC"]}
                            ]
                    }
                ]
        }];
        let formedJson = {}
        json.forEach((item) => {
            console.log("Building it all..." + item.action[0].vertex)
            let first = item.action.length;
            for (let i = 0; i < first; i++) {
                //document.write("-----------Vertex:"+item.action[i].vertex+"\n");
                formedJson[item.action[i].vertex] = [];//addVertex Actions
                let second = item.action[i].actions.length
                for (let j = 0; j < second; j++) {
                    let f = <div>
                        <input type="checkbox" id="topping" key={i + ":" + j}
                               value="Paneer"/>{item.action[i].actions[j].name}
                    </div>
                    console.log(item.action[i].actions[j].name);
                    formedJson[item.action[i].vertex].push(f);
                    //add vertex actions and data points
                    //document.write("Name:"+item.action[i].actions[j].name+"\n");
                }
            }
        });
        this.setState({
            options: formedJson
        });
        console.log("ZZZZZZ: " + formedJson["host"])
        return formedJson;
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
        let formedJson = this.buildActions();
        let selection = event.target.value;
        let f = this.state.columnOptions;
        console.log(formedJson.bridge.toString());
        console.log("===========");
        if (selection === "Bridge") {
            f[number] = <div className={"solutionList"}>
                {formedJson.bridge}
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
                    {formedJson.host}
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
