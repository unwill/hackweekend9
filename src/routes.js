"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="players" handler={require('./components/players/playerPage')} />
    <Route name="addPlayer" path="player" handler={require('./components/players/managePlayerPage')} />
    
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/notFoundPage')} />
    <Redirect from="about*" to="about" />
    <Redirect from="ployer" to="players" />
    <Redirect from="about/*" to="about" />

  </Route>
);

module.exports = routes;