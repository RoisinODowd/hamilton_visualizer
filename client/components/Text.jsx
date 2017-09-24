import React from 'react';
import TextParagraph from './TextParagraph.jsx'

export default class Text extends React.Component{
	render() {
		var json = require(`../JSON Files/A_Winter's_Ball.json`); 

		var results = json["results"];
		console.log(results);
		var paragraphs = [];//array of text for each paragraph

		for (var i = 0; i < results.length; i++) {
			var j = 0;
			var text ="[" + results[i][j]["name"] + "]";
			text += "\n\n";
			for (j = 1; j < results[i].length; j++) {
				text+= results[i][j]["word"] + " ";
			}
			paragraphs[i] = text;
		}
		var k = 0;
			return (
				<div id = 'text' style = {{ padding: '0px 10px 0px', color: '#997500'}}>
					{paragraphs.map(paragraph => (<TextParagraph data={paragraph} key={paragraph.length + (++k)} />))}
					<p>  <br/> <br/> <br/> <br/> <br/> <br/ ><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/ ><br/> <br/> </p>
		  	</div>
						);
	}
}
