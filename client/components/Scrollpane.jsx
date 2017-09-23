import React from 'react';

export default class Scrollpane extends React.Component{
	render() {
		var json = require('../test.json'); //(with path)
		console.log(json);
		var w = this.props.width;
		var h = this.props.height;
		const scrollStyle = {
			width: w,
			height: h,
			backgroundColor: 'teal'
		}
		console.log(scrollStyle);
		return (
			<div style={scrollStyle}> </div>
		);
	}
}
