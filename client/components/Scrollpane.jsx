import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text.jsx';

export default class Scrollpane extends React.Component{


	constructor() {
		super();
		this.state = {
			previousParagraph: 0,
			currentParagraph: 0,
			pastLines: []
		};

  }

  scrollListener() {
	  var scrolledOff = (ReactDOM.findDOMNode(this).scrollTop);
		scrolledOff = scrolledOff - this.props.lineHeightNumber;

		var number = Math.round(scrolledOff / this.props.lineHeightNumber) - 1;
		//console.log(number);	

		var arr = [];
	  var element = document.getElementById('text');
		var myListItems = element.getElementsByTagName('p');
		var i = 0;
		var sum = 0;
		for ( ; i <= myListItems.length; ++i) {
			   arr[i] = sum;
			   if (i == myListItems.length)
			    	break;
				 element = myListItems[i];
			   var height = element.clientHeight;
			   var numLinesPerParagraph = Math.round(height / this.props.lineHeightNumber) - 2;
			   sum += Math.floor(numLinesPerParagraph*0.75) + 1;
		}


  	this.state = {
			previousParagraph: this.state.previousParagraph,
			currentParagraph: this.state.currentParagraph,
			pastLines: arr 
		};

		element = document.getElementById('text').getElementsByTagName('p')[this.state.currentParagraph];
		element.style.background = 'rgba(255, 255, 255, 1)';

		if (number < 0)
			number = 0;

		if (number >= this.state.pastLines[this.state.currentParagraph + 1] && this.state.currentParagraph < myListItems.length - 1) {
			this.state = {
				previousParagraph: this.state.currentParagraph,
				currentParagraph: this.state.currentParagraph + 1,
				pastLines: this.state.pastLines
			}
			element.style.background = 'none';
		}else if (number < this.state.pastLines[this.state.currentParagraph]) {
      	this.state = {
				previousParagraph: this.state.currentParagraph,
				currentParagraph: this.state.currentParagraph - 1,
				pastLines: this.state.pastLines
			}
			element.style.background = 'none';
		}


	}

	componentDidMount() {
		//var element = document.getElementById("1");
		document.getElementById('text').getElementsByTagName('p')[0].style.background = '#fff';
	}

	render() {
		var json = require('../test.json'); //(with path)
		var w = this.props.width;
		var h = this.props.height;
		var lH = this.props.lineHeight;
		const scrollStyle = {
			width: w,
			height: h,
			backgroundColor: 'black',
			overflow: 'scroll',
			lineHeight: {lH},
			fontFamily: 'Arial',
			fontSize: lH,
			border: '2px solid grey'
		}

		
		return (
			<div style={scrollStyle} onScroll = {this.scrollListener.bind(this)}> 
				<Text />
			</div>
		);
	}
}
