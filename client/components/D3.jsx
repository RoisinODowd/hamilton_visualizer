import React from 'react';
import Circle from './Circle.jsx'

export default class D3 extends React.Component{
	render() {
		var json = require('../test.json'); //(with path)
		console.log(json);
		var w = this.props.width;
		var h = this.props.height;
		const D3Style = {
			width: w,
			height: h,
			backgroundColor: '#839496',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }

        const svgStyle = {
            border: '2px solid black'
        }
        

		console.log(D3Style);
		return (
			<div style={D3Style}>
                <svg width='400px' height='400px' style={svgStyle} >
                <Circle x={100} y = {10} r = {10} fill = 'yellow' />
                <Circle x={300} y = {180} r ={30} fill = 'rgba(80, 255, 255, 1)'/>
                </svg>
            </div>


		);
	}
}



