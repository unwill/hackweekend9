"use strict"; //evalute in strict mode

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1> Deltaker module</h1>
				<p> React , React Router, and Flux for responsiv web apps. </p>
				<Link to="about" className="btn btn-primary btn-lg">Mer!</Link>
			</div>		
		);

	}

});

module.exports = Home;