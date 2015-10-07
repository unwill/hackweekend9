"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <Link to="app" href="/" className="navbar-brand">
                <img src="images/acando.png" />
              </Link>
              <ul className="nav navbar-nav">
                <li><Link to="app">Hjem</Link></li>
                <li><Link to="players">Personer</Link></li>
                <li><Link to="about">Om</Link></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
