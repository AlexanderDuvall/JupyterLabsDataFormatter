import React from 'react';
import './index.css';

export class ExampleComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            number: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.increment = this.increment.bind(this);
        this.paramaterTest = this.paramaterTest.bind(this);
    }

    increment() {
        this.setState((state, props) => ({
            number: props.inc + state.number
        }));
        console.log("Number is now: " + this.state.number);
    }

    handleClick() {
        console.log("I was clicked!");
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.timer(),
            1000
        );
    }

    componentWillMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    timer() {
        this.setState({
            date: new Date()
        });
    }

    paramaterTest(string) {
        console.log(string);
    }

    render() {
        return (
            <div>
                <h1> This is the example component</h1>
                <h4>I'm the new time component.... {this.state.date.toLocaleTimeString()}</h4>
                <h5>Example props: {this.props.asdf}</h5>
                <button onClick={this.handleClick}> click me!</button>
                <button onClick={this.increment}> Also me please</button>
                <button onClick={this.paramaterTest.bind(this, "test")}> test</button>
                <List array={[1, 2, 3, 4, 5]}/>
                <List2 array2={[123123,34,455,6]}/>
            </div>
        );
    }
}

function List(props) {
    let elements = props.array.map((e, index) =>
        <div key={index.toString()}>
            <h1>{e}</h1>
        </div>
    )
    return elements
}

function List2(props) {
    const a = props.array2;
    return (
        <div>
            {a.map((e) =>
                <p>{e}</p>
            )}
        </div>);
}

export default ExampleComponent;
