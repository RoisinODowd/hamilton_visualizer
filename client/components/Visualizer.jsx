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
	  this.state = {motifs:  json["motifs"], lastParagraph:  -1, motifIndices: [], draw: '' };
		for (var i = 2; i < this.state.motifs.length; i+=4) {
      this.state.motifs[i]['word3'] = this.state.motifs[i]['word3'].substring(0, this.state.motifs[i]['word3'].length - 1); 
		}
  }

	getDrawFromRenderer(param) {
		this.setState({draw: param});
	}

	doesMotifMatch(k, w1, w2, w3){
		//console.log('against ' + this.state.motifs[k]['word1'] + ' ' + this.state.motifs[k+1]['word2'] + ' ' + this.state.motifs[k+2]['word3']);
		return this.state.motifs[k]['word1'] === w1 && this.state.motifs[k+1]['word2'] === w2 && this.state.motifs[k+2]['word3'] === w3;
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
			console.log(a + ' ' + b + ' ' + c);
		  var freq = this.state.motifs[k+3]['freq'];

			var randX = Math.floor(Math.random() * w);
			var randY = Math.floor(Math.random() * h);

			var color = 0x99ccff;
			var rect = this.state.draw.rect(40*(Math.min(2, freq/20.0)) , 40*(Math.min(2, freq/20.0)));

			rect.animate({ease: '<>'}).move(randX * 50, randY * 50 ).fill('#fff');

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


    return (
			<div ref='elem' id = 'visualizer' style = {mainStyle}>
				<D3 funcBack={this.getDrawFromRenderer.bind(this)} indices = {this.state.motifIndices} id ='maind3' width='1000px' height='600px' />
				<Scrollpane label = {this.props.label} func={this.scroll.bind(this)} id='scroll' width='34vw' height='600px' lineHeight='18px' lineHeightNumber='18' />
			</div>
    );
  }
}
