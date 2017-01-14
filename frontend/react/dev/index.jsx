import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

console.clear();

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
	<HelloWorld greetTarget="Anyone else"/>
	<HelloWorld greetTarget="Anyone else - 2nd"/>
	<HelloWorld greetTarget="Anyone else - 3rd"/>
	<HelloWorld greetTarget="Anyone else - 4th"/>
	<HelloWorld greetTarget="Anyone else - 5th"/>
	<HelloWorld greetTarget="Anyone else - 5th"/>
	<HelloWorld greetTarget="Anyone else - 6th"/>
  </div>,
  document.querySelector("#container")
);
