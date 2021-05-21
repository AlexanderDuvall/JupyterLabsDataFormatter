import React from "react";

class ContentEditor extends React.Component {
    constructor(props) {
        super(props);
        let content = [1, 2]
        this.state = {
            columnContent: content,
            content: ["IP Address", "IP Address"]
        }
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
        this.saveContent = this.saveContent.bind(this);
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
            return <option value={compare} selected>{compare}</option>
        }
        return <option value={compare}>{compare}</option>
    }

    renderColumnContent() {
        let content = this.state.columnContent
        const items = content.map((number) =>
            <select className={"column"} key={number} name="Templates" id="Templates"
                    onSelect={(e) => this.saveContent(number, e)}>
                {this.isSelected(number, "IP Address")}
                {this.isSelected(number, "MAC Address")}
                {this.isSelected(number, "VLAN")}
                {this.isSelected(number, "Router")}
                {this.isSelected(number, "Gateway")}
            </select>
        );
        return items;
    }

    append(event) {
        var a = this.state.columnContent;
        a.push(a.length + 1)
        this.setState({
            columnContent: a
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

//TODO, add what solution types are available in solution. So only a select few options are available.
//TODO, account for variability in practice.
    //TODO Add option for what format to show topology (dot, neato...)


    render() {
        return (
            <React.Fragment>
                <div className="centerInput">
                    <label className="labelClass">Problem Solution</label>
                </div>
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
