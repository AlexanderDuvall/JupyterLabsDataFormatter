import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExampleComponent from "./exampleComponent"
 import reportWebVitals from './reportWebVitals';
//import {render} from "@testing-library/react";
import Editor from "./Editor";
let person = {
    Hair: "Curly",
    hairColor: "Black"
};
const name = "Alexander Duvall";
var age = 12;
const element = <h2> My name is {name}. I am {age}.</h2>

function ExamplePicture(props) {
    let element = <div>
        <img src={props.source}/>
    </div>
    return element;
}

function Conditional1(props) {
    let elements = <div>{
        props.bol &&
        <h1> we are True!</h1>}
    </div>
    return elements;
}

function Conditional2(props) {
    return (<div>
        <h3>
            {props.c2 ? "hello" : "oh no"}
        </h3>
    </div>)
}function Conditional3(props) {
    if (props.c3){
        return(<div>
            <h4>Conditional 3 is true</h4>
        </div>);
    } else {
        return(<div>
            <h4>Conditional 3 is false</h4>
        </div>);
    }
 }

function Christmas(props) {
    let elements = <div>
        <h4> {props.name} is going to bring us presents!</h4>
    </div>;
    return elements;
}

function dynamic() {
    let time = new Date().toLocaleTimeString();
    ReactDOM.render(
        <div>
        <h1>First Problem</h1>
        </div>,
        document.getElementById('left')
    );
    ReactDOM.render(
        <Editor/>,
        document.getElementById("right")
    )
}




function personInfo(person) {
    const element = (
        <div>
            <h3>Hair: {person.Hair}</h3>
            <h3> Hair Color: {person.hairColor}</h3>
        </div>
    );

    return element;
}

setInterval(dynamic, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
