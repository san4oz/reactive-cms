import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./frontend/HelloWorld";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<HelloWorld />, wrapper) : false;