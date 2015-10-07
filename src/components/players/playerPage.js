"use strict";

var React = require('react');
var PlayerApi = require('../../api/playerApi');
var PlayerList = require('./playerList');
var Link = require('react-router').Link;

var PlayerPage = React.createClass({
	getInitialState: function() {
		return {
			players: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ players: PlayerApi.getAllPlayers() });
		}
	},

	render: function() {
		return (
			<div>
				<h1>Players</h1>
				<Link to="addPlayer" className="btn btn-default">Legg til deltaker</Link>
				<PlayerList players={this.state.players} />
			</div>
		);
	}
});

module.exports = PlayerPage;