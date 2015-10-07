"use strict";

//This file is mocking a web API by hitting hard coded data.
var players = require('./playerData').players;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(player) {
	return player.firstName.toLowerCase() + '-' + player.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var PlayerApi = {
	getAllPlayers: function() {
		return _clone(players); 
	},

	getPlayerById: function(id) {
		var player = _.find(players, {id: id});
		return _clone(player);
	},
	
	savePlayer: function(player) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the player to the DB via AJAX call...');
		
		if (player.id) {
			var existingPlayerIndex = _.indexOf(players, _.find(players, {id: player.id})); 
			players.splice(existingPlayerIndex, 1, player);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new players in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			player.id = _generateId(player);
			players.push(_clone(player));
		}

		return player;
	},

	deletePlayer: function(id) {
		console.log('Pretend this just deleted the player from the DB via an AJAX call...');
		_.remove(players, { id: id});
	}
};

module.exports = PlayerApi;