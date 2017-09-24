import React from 'react';
import SVG from 'svg.js';

export default class Renderer extends React.Component {

	constructor() {
		super();
		this.state = {
			draw: ''
		};
    
	}

  arc_links(dwg,x1,y1,x2,y2,n,k) {
  var cx = (x1+x2)/2;
  var cy = (y1+y2)/2;
  var dx = (x2-x1)/2;
  var dy = (y2-y1)/2;
  var i;
  for (i=0; i<n; i++) {
    if (i==(n-1)/2) {
      dwg.line(x1,y1,x2,y2).stroke({width:1}).attr({'stroke': "#fff"}).fill('none');
    }
    else {
     var dd = Math.sqrt(dx*dx+dy*dy);
      var ex = cx + dy/dd * k * (i-(n-1)/2);
      var ey = cy - dx/dd * k * (i-(n-1)/2);
      dwg.path("M"+x1+" "+y1+"Q"+ex+" "+ey+" "+x2+" "+y2).stroke({width:1}).attr({'stroke': "#fff"}).fill('none');
    }
  }

	}

	componentDidMount() {
	
    var draw = SVG('drawing');
		this.state = {
			draw: draw
		};

		console.log('called');

		draw.size('60vw', 600);
		//	var rect = draw.circle(100, 100);
		//	rect.animate().attr({ fill: '#89a' });
		
		//  rect.animate().center(250, 250).loop(2, true);
		//	this.arc_links(draw,50,50,250,50,2,40);
		//  this.arc_links(draw,250,50,250,250,3,40);
		// this.arc_links(draw,250,250,50,250,4,40);
		// this.arc_links(draw,50,250,50,50,5,40);

		// draw.circle(50).move(25,25).fill('#fff').stroke({width:1});
		//draw.circle(50).move(225,25).fill('#fff').stroke({width:1});
		//draw.circle(50).move(225,225).fill('#fff').stroke({width:1});
		//draw.circle(50).move(25,225).fill('#fff').stroke({width:1});		


		this.props.funcBack(draw);

		}


	render() {
		console.log('called :)');
		return <div > </div>
	}

}
