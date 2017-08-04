import React from 'react';
import autobind from 'react-autobind';

export default class Home extends React.Component {
	constructor( props ){
		super( props );
		autobind( this );
		this.state = {
			
		};
	}

	render(){
		const { prop } = this.props;
		const { state } = this.state;

		return (
			<h1>
				Home
			</h1>
		);
	}
}