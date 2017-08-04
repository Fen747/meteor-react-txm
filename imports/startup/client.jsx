import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { createContainer } from 'react-meteor-data';

import Login from '/imports/ui/Login';
import Home from '/imports/ui/Home';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Import functionnal programming functions & aliases this way
// import { map, find, findOne, now } from '/imports/lib';

const Authenticated = ({ loggingIn, userId, component, ...rest }) => {
	const _CompToRender = props => {
	  if ( loggingIn )
	  	return ( <div>Logging in...</div> );
	  else if ( userId )
	  	return ( <component userId={userId} {...props} /> );
	  else
	  	return ( <Redirect to="/login" /> );
	};

	return ( <Route render={_CompToRender} {...rest} /> );
};

const App = createContainer( appProps => {
	const userId = Meteor.userId();
	const loggingIn = Meteor.loggingIn();

	return ({ userId, loggingIn });
}, props => (
	<main>
		<Switch>
			<Route component={Login} exact path="/login" />
			<Authenticated component={Home} exact path="/" {...props} />
		</Switch>
	</main>
) );

Meteor.startup( f => {
	//new WOW().init();

	render(
		<BrowserRouter>
	    <App />
	  </BrowserRouter>
	  , document.getElementById('render-target')
	);
} );