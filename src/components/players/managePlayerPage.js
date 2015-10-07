"use strict";

var React = require('react');
var Router = require('react-router');
var PlayerForm = require('./playerForm');
var PlayerApi = require('../../api/playerApi');
var toastr = require('toastr');

var ManagePlayerPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm('Lagre?')) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
		return {
			player: { id: '', firstName: '', lastName: '' },
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		var playerId = this.props.params.id; //from the path '/player:id'

		if (playerId) {
			this.setState({player: PlayerApi.getPlayerById(playerId) });
		}
	},

	setPlayerState: function(event) { //Hver gang man trykker ned en knapp
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.player[field] = value;
		return this.setState({player: this.state.player});
	},

	playerFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.player.firstName.length < 3) {
			this.state.errors.firstName = 'Fornavn må være over 3 bokstaver';
			formIsValid = false;
		}

		if (this.state.player.lastName.length < 3) {
			this.state.errors.lastName = 'Etternavn må være over 3 bokstaver';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	savePlayer: function(event) {
		event.preventDefault();

		if (!this.playerFormIsValid()) {
			return;
		}

		PlayerApi.savePlayer(this.state.player);
		this.setState({dirty: false});
		toastr.success('Deltaker lagt til.');
		this.transitionTo('players');
	},

	render: function() {
		return (
			<PlayerForm
				player={this.state.player}
				onChange={this.setPlayerState}
				onSave={this.savePlayer}
				errors={this.state.errors} />
		);
	}
});

module.exports = ManagePlayerPage;