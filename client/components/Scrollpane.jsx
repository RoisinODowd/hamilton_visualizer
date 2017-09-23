import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text.jsx';

export default class Scrollpane extends React.Component{


	constructor() {
		super();
		this.state = {
			linesInPreviousParagraphs: 0,
			currentParagraph: 0,
			lastLine: 0
		};
	}

  scrollListener() {
	  var scrolledOff = (ReactDOM.findDOMNode(this).scrollTop);
		scrolledOff = scrolledOff - this.props.lineHeightNumber;

		var number = Math.round(scrolledOff / this.props.lineHeightNumber) - 1;
		//console.log(number);	

		var element = document.getElementById('text');
		var myListItems = element.getElementsByTagName('p');
		var i = 0;
		for ( ; i < myListItems.length; ++i) {
			if (i == this.state.currentParagraph) {
				 element = myListItems[i];
				 break;
			}
		}

		if (this.state.currentParagraph < 0) {
			this.setState({currentParagraph: 0});
		}
		console.log(this.state);

		element.style.background = '#eeffcc';
		var height = element.clientHeight;
		var numLinesPerParagraph = Math.round(height / this.props.lineHeightNumber) - 2 ;
		console.log(numLinesPerParagraph);

		if (number >= this.state.linesInPreviousParagraphs + numLinesPerParagraph + 1	) {
			var newVal = this.state.linesInPreviousParagraphs + 1 + numLinesPerParagraph;
			var cur = this.state.currentParagraph;
			this.state = {
				linesInPreviousParagraphs: newVal,
				currentParagraph: cur+1,
				lastLine: 0
			 };
			 element.style.background = 'none';
		}else if (number <= this.state.linesInPreviousParagraphs - 0 - numLinesPerParagraph) {
			element.style.background = 'none';
			var newVal = this.state.linesInPreviousParagraphs -0 - numLinesPerParagraph;
			var cur = this.state.currentParagraph;
			this.state = {
				linesInPreviousParagraphs: newVal,
				currentParagraph: cur-1,
				lastLine: 0
			};
		}

	}

	componentDidMount() {
		//var element = document.getElementById("1");
		document.getElementById('text').getElementsByTagName('p')[0].style.background = '#eeffcc';
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
			fontSize: lH
		}

		
		return (
			<div style={scrollStyle} onScroll = {this.scrollListener.bind(this)}> 
				<Text />
			</div>
		);
	}
}
