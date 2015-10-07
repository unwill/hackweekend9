"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler) { //kan bruke Router.HistoryLocation for friendlyURL
	React.render(<Handler/>, document.getElementById('app'));
});
