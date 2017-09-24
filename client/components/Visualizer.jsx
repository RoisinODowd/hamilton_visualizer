/*
  ./client/components/Visualizer.jsx
*/


import React from 'react';
import D3 from './D3.jsx'
import Scrollpane from './Scrollpane.jsx'
import Renderer from './Renderer.jsx';

export default class Visualizer extends React.Component{

  constructor(props) {
    super(props);

		var json = require('../motifs.json');
	  this.state = {motifs:  json["motifs"], lastParagraph:  -1, motifIndices: [], draw: '', visited: [], index: -1 };
		for (var i = 2; i < this.state.motifs.length; i+=4) {
      this.state.motifs[i]['word3'] = this.state.motifs[i]['word3'].substring(0, this.state.motifs[i]['word3'].length - 1); 
		}
  }

	onMouseClick(x, y) {
     for (var n in this.state.visited) {
      var v = this.state.visited[n];
			 if (Math.abs(x - v.x) <= v.w && Math.abs(y - v.y) <= v.h ) {
				 console.log(v.a + ' ' + v.b + ' ' + v.c);
				 this.setState({index: n});
				}
		 }
	}

	getDrawFromRenderer(param) {
		this.setState({draw: param});
	}

	doesMotifMatch(k, w1, w2, w3){
		//console.log('against ' + this.state.motifs[k]['word1'] + ' ' + this.state.motifs[k+1]['word2'] + ' ' + this.state.motifs[k+2]['word3']);
		return this.state.motifs[k]['word1'] === w1 && this.state.motifs[k+1]['word2'] === w2 && this.state.motifs[k+2]['word3'] === w3;
	}

	getRandomColor() {
 		 var color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
     return color;
  }
	scroll(currentParagraph, scrollState, numberOffScreen){
		if (currentParagraph == this.state.lastParagraph) {
			return;
		}
		this.state.lastParagraph = currentParagraph;
		

		var paragraph = document.getElementById('text').getElementsByTagName('p')[currentParagraph].innerHTML;
		//test for motifs
		var matchedMotifIndices = [];

		var words = paragraph.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
		var actualWords = [];
		var i = 0;
		if (words.length == 0) 
			return;
		for ( ; i < words.length; i++) {
			if(words[i].endsWith(']')) {
				i++;
				break;
			}
		}
		for(; !words[i].startsWith('<'); i++) {
			actualWords.push(words[i]);
		}
		if (actualWords.length == 0)
			return;
		
		for (var k = 0; k < actualWords.length - 2; k++){
			for(var j = 0; j < this.state.motifs.length; j+=4) {
				if(this.doesMotifMatch(j, actualWords[k], actualWords[k+1], actualWords[k+2])) {
					matchedMotifIndices.push(j);
				}
			}
		}

		this.state.motifIndices = matchedMotifIndices;
		var w = 16, h = 12;

		var scrollElement = document.getElementById('fuck');
		if (scrollState.currentParagraph == 0) {
			console.log('reset');
			//	this.setState({draw: SVG('drawing')});
		}


		//this.state.draw.rect(2000, 2000).fill('black');


			//for (i = 0; i < this.state.visited.length; i++ ){
		//	var v = this.state.visited[i];
		//	rect.draw(v.w, v.h).move(v.x, v.y).fill(v.color);
		//	}

		for (i = 0; i < matchedMotifIndices.length; i++) {
			var k = matchedMotifIndices[i];
			//	if (this.state.visited.includes({paragraph: currentParagraph, index: k})){
				//	continue;
				//	}else {
			//var visit = this.state.visited;
			//visit.push({paragraph: currentParagraph, index: k});
			//	this.setState({visited, visit});
			//	}
			var a = this.state.motifs[k]['word1'], b = this.state.motifs[k+1]['word2'], c= this.state.motifs[k+2]['word3'];
			//	console.log(a + ' ' + b + ' ' + c);
		  var freq = this.state.motifs[k+3]['freq'];

			var randX = Math.floor(Math.random() * w);
			var randY = Math.floor(Math.random() * h);

			var color = 0x99ccff;
			var currentlyVisited = this.state.visited;
			var w = 40*(Math.min(2, freq/20.0));
			var h = 40*(Math.min(2, freq/20.0));
			var rect = this.state.draw.rect(w,h);

			var color = this.getRandomColor();
			rect.animate({ease: '<>'}).move(randX * 50, randY * 50 ).fill(color);
    	currentlyVisited.push({a: a, b: b, c: c, x: randX*50, y: randY * 50, w: w, h: h, color: color, freq: freq});
			this.setState({visited: currentlyVisited});


		}



	}

  render() {
    var fullHeight = document.documentElement.clientHeight;
    const mainStyle = {
      width: '100%',
      height: `${fullHeight - 120 - 20}px`,
      //background: 'rgba(80, 130, 160, 0.2)',
      //border: '2px grey solid',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '5px',
      paddingLeft: '0',
      marginLeft: '0px',
      boxStyle: 'border-box',
      overflow: 'hidden',
      backgroundImage: `url(hamilton_background.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
			backgroundSize: '100%',
      backgroundSize: 'cover',

    }


    var str = '';
		var freq = '';
		if (this.state.index >= 0){
	    	var v =  this.state.visited[this.state.index]; 
			  str = v.a + " " + v.b + " " + v.c;
			  freq = v.freq + " instances";
		}
    return (
			<div ref='elem' id = 'visualizer' style = {mainStyle}>
				<D3 mouse={this.onMouseClick.bind(this) }funcBack={this.getDrawFromRenderer.bind(this)} indices = {this.state.motifIndices} id ='maind3' width='1000px' height='600px' />
				<span>
				<Scrollpane label = {this.props.label} func={this.scroll.bind(this)} id='scroll' width='34vw' height='400px' lineHeight='18px' lineHeightNumber='18' />
				<div style={{ height:  '188px', background: 'black', color: '#997500', border: '2px solid grey', font: '20px Arial', padding: '4px 10px'}}>
					Motif: { str } <br/>
					Frequency: { freq }
				</div>
			 </span>
			</div>
    );
  }
}
