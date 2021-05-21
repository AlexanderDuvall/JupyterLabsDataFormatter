import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExampleComponent from "./exampleComponent"
 import reportWebVitals from './reportWebVitals';
//import {render} from "@testing-library/react";
import Editor from "./Editor";
import LeftSelector from "./LeftSelector";
function dynamic() {
    ReactDOM.render(
       <LeftSelector/>,
        document.getElementById('left')
    );
}
 dynamic();
//setInterval(dynamic, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
