import React from 'react';

export default class D3 extends React.Component{
	render() {
		var json = require('../test.json'); //(with path)
		console.log(json);
		var w = this.props.width;
		var h = this.props.height;
		const D3Style = {
			width: w,
			height: h,
			backgroundColor: 'green'
		}
		console.log(D3Style);
		return (
			<div style={D3Style}> </div>
		);
	}
}
