import React from "react";

class ContentEditor extends React.Component {
    constructor(props) {
        super(props);
        var content = [1, 2]
        this.state = {
            columnContent: content,
            content: <h1>1</h1>
        }
        this.append = this.append.bind(this);
        this.pop = this.pop.bind(this);
    }

    renderColumnContent() {
        let content = this.state.columnContent
        const items = content.map((number) =>
             <select className={"column"} key={number} name="Templates" id="Templates">
                <option value="IP Address">IP Address</option>
                <option value="Mac Address">Mac Address</option>
                <option value="VLan">VLan</option>
                <option value="Router">Router</option>
                <option value="Gateway">Gateway</option>
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
    pop(event){
        var a = this.state.columnContent;
        a.pop();
        this.setState({
            columnContent:a
        });
        this.renderColumnContent();
    }
    render() {
        return (
            <React.Fragment>
                <div className="centerInput">
                    <label className="labelClass">Problem Solution</label>
                </div>

                <div className="problemSelector">
                    <button className="Append" onClick={() => this.append()}>
                        <img className={"imageButton"}
                             src="https://pngimage.net/wp-content/uploads/2018/05/add-icon-png-black-3.png"
                             alt="logo.svg"/>
                    </button>
                    <button className="Append" onClick={() => this.pop()}>
                    <img className={"imageButton"}
                         src="https://img.icons8.com/cotton/452/minus-sign.png"
                         alt="logo.svg"/>
                </button>
                    {this.renderColumnContent()}
                </div>
            </React.Fragment>
        )
    }
}

export default ContentEditor