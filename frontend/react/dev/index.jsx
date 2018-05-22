import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

console.clear();

// this.domainApiUrl = 'http://5879ff5b326f981200e70545.mockapi.io/api/domains';

var Domain = React.createClass({
  render: function() {
    return (
      <p>{this.props.id} - {this.props.name}!</p>
    );
  }
});

ReactDOM.render(
  <div>
    <Domain name="domain1.tld" id="1"/>
	<Domain name="domain2.tld" id="2"/>
	<Domain name="domain3.tld" id="3"/>
	
  </div>,
  document.querySelector("#container")
);
