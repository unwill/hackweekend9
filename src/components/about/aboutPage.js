"use strict";

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback) {
			if (!confirm('Vil du virkelig gå inn i til Om?')) {
				transition.about();
			} else {
				callback();
			}
		},
		
		willTransitionFrom: function(transition, component) {
			if (!confirm('Vil du virkelig forlate Om?')) {
				transition.about();
			}
		}
	},
	render: function () {
		return (
			<div>
				<h1>Om</h1>
				<p>
					Applikasjonen bruker disse rammeverkene
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
						<li>Lodash</li>
					</ul>
				</p>
			</div>
		); 
	}
});

module.exports = About;