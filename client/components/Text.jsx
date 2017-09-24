import React from 'react';
import TextParagraph from './TextParagraph.jsx'

export default class Text extends React.Component{
   
	toString(index) {
		index = parseInt(index);
			var options =  [
        "Alexander Hamilton",
        "Aaron Burr, Sir",
        "My Shot",
        "The Story Of Tonight",
        "The Schuyler Sisters",
        "Farmer Refuted",
        "You'll Be Back",
        "Right Hand Man",
        "A Winter's Ball",
        "Helpless",
        "Satisfied",
        "The Story Of Tonight (Reprise)",
        "Wait For It",
        "Stay Alive",
        "Ten Duel Commandments",
        "Meet Me Inside",
        "That Would Be Enough",
        "Guns And Ships",
        "History Has Its Eyes On You",
        "Yorktown (The World Turned Upside Down)",
        "What Comes Next",
        "Dear Theodosia",
        "Non-Stop",
        "What'd I Miss", 
        "Cabinet Battle #1", 
        "Take A Break", 
        "Say No To This", 
        "The Room Where It Happens", 
        "Schuyler Defeated", 
        "Cabinet Battle #2", 
        "Washington On Your Side", 
        "One Last Time", 
        "I Know Him", 
        "The Adams Administration", 
        "We Know", 
        "Hurricane", 
        "The Reynolds Pamphlet", 
        "Burn", 
        "Blow Us All Away", 
        "Stay Alive (Reprise)", 
        "It's Quiet Uptown", 
        "The Election Of 1800", 
        "Your Obedient Servant", 
        "Best Of Wives And Best Of Women",
        "The World Was Wide Enough", 
        "Who Lives, Who Dies, Who Tells Your Story"
			];
		return options[index];
	}


	render() {
		
		console.log(this.props.label);
		var label = this.toString(this.props.label);
		if (label == undefined)
			label = this.props.label;


		var temp = '';
		for (var m = 0; m < label.length; m++) {
        if (label[m] === ' '){
          temp += '_'; 
				}else 
				    temp += label[m];
		}
		label = temp;
		console.log(label);
		var json = require(`../JSON Files/` + label + `.json`); 

		var results = json["results"];
		//		console.log(results);
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
					{paragraphs.map(paragraph => (<TextParagraph data={paragraph} key={paragraph.length *13* (++k)} />))}
					<p>  <br/> <br/> <br/> <br/> <br/> <br/ ><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/ ><br/> <br/> </p>
		  	</div>
						);
	}
}
