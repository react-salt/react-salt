import React from 'react';

export default class Ex extends React.Component {
	render() {
		let { cp, name } = this.props;
		return (
			<div>{this.props.cp}{this.props.name}</div>
		);
	}
}