import React from 'react';
import SVG from 'svg.js';

export default class Renderer extends React.Component {

	constructor() {
		super();
    this.state = {
      x: 0,
      y: 0
    };
	}


	
	componentDidMount() {
	
    var draw = SVG('drawing');
		draw.size(400, 500);
		var rect = draw.rect(100, 100).attr({ fill: '#f06' });
    rect.animate().center(200, 200)

		//	var div = document.getElementById('outter');
	 //	div.element.onmove = this.onMoveHandler.bind(this);
		//	div.element.onclick = this.onClickHandler.bind(this);
		//this.state.div = div;

	}


	render() {
		return <div > </div>
	}

}
