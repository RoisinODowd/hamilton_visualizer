/*
  ./client/components/Iframe.jsx
*/


/* import SpotifyPlayer from 'react-spotify-player';
//import React from 'react';

//export default class Iframe extends React.Component{

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

<SpotifyPlayer
  uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
  size={size}
  view={view}
  theme={theme}
/>
//}
*/


import React from 'react';
import DropdownWrapper from './Dropdown.jsx'

export default class Iframe extends React.Component{

	constructor() {
		super();
      this.state = {option: 0};
	}

/*
var Iframe = React.createClass({
  render: function() {
    return(
      <div>
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
      </div>
    )
  }
});

ReactDOM.render(
  <
);
*/

/*
  constructor(props) {
    super(props);

    this.state = {sidebar : false, sidebarWidth: 160};
  }
*/

  render() {
   const iframeStyle = {
   /*
      height: '120px',
      width: '100vw',
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'right',
      fontSize: '40px',
      fontFamily: 'Palatino',
      color: 'black',
     // border: '2px solid grey',
      boxSizing: 'border-box',
      margin: '0px'
    */
    }

		var optionString = this.props.value;
		var temp = new DropdownWrapper();
		for(var i = 0; i < temp.state.options.length; ++i){
        if(temp.state.options[i] === optionString){
					this.state.option = i;
					break;
				}
		}	

		console.log(this.state.option);

		var values = [
        "https://open.spotify.com/embed?uri=spotify:track:4TTV7EcfroSLWzXRY6gLv6",
        "https://open.spotify.com/embed?uri=spotify:track:6dr7ekfhlbquvsVY8D7gyk",
        "https://open.spotify.com/embed?uri=spotify:track:4cxvludVmQxryrnx1m9FqL",
        "https://open.spotify.com/embed?uri=spotify:track:0NJWhm3hUwIZSy5s0TGJ8q",
        "https://open.spotify.com/embed?uri=spotify:track:71X7bPDljJHrmEGYCe7kQ8",
        "https://open.spotify.com/embed?uri=spotify:track:2G9lekfCh83S0lt2yfffBz",
        "https://open.spotify.com/embed?uri=spotify:track:6OG1S805gIrH5nAQbEOPY3",
        "https://open.spotify.com/embed?uri=spotify:track:3nJYcY9yvKP8Oi2Ml8brXt",
        "https://open.spotify.com/embed?uri=spotify:track:2yBMVrq96wb9OHbMdBs0lF",
        "https://open.spotify.com/embed?uri=spotify:track:54Sc7mZQ1RM03STpk4SfaA",
        "https://open.spotify.com/embed?uri=spotify:track:3dP0pLbg9OfVwssDjp9aT0",
        "https://open.spotify.com/embed?uri=spotify:track:1CzeuSrm71wHP9qsjg7p3F",
        "https://open.spotify.com/embed?uri=spotify:track:7EqpEBPOohgk7NnKvBGFWo",
        "https://open.spotify.com/embed?uri=spotify:track:27MB0qHaYAZiTlwg25js1Y",
        "https://open.spotify.com/embed?uri=spotify:track:3lXyAQ0kekAvY5LodpWmUs",
        "https://open.spotify.com/embed?uri=spotify:track:6p7jXaTJdpzGWnOJoK2jYr",
        "https://open.spotify.com/embed?uri=spotify:track:6oF8ueLn5hIl4PRp17sxW6",
        "https://open.spotify.com/embed?uri=spotify:track:7m9XR7FquXLP1FewdAcNS9",
        "https://open.spotify.com/embed?uri=spotify:track:1mGO8rwCE9zk7H06OxcU5m",
        "https://open.spotify.com/embed?uri=spotify:track:733tju3KUeatsbjcTRQ04i",
        "https://open.spotify.com/embed?uri=spotify:track:3D4J0o9w44QKFrBrYrSVJY",
        "https://open.spotify.com/embed?uri=spotify:track:2sEq2rC3ynYsT49x7utWnd",
        "https://open.spotify.com/embed?uri=spotify:track:7qfoq1JFKBUEIvhqOHzuqX",
        "https://open.spotify.com/embed?uri=spotify:track:2W9u3whoCkQYOUbmnSrHi1",
        "https://open.spotify.com/embed?uri=spotify:track:3TfKt8mPpdXfQTMfRjHzyz",
        "https://open.spotify.com/embed?uri=spotify:track:2qFIJT5hjqaNFA1GKwl9me",
        "https://open.spotify.com/embed?uri=spotify:track:3s9itRgJYcKhem01P17865",
        "https://open.spotify.com/embed?uri=spotify:track:2TK2KSrzXD6W01qjXVjNGh",
        "https://open.spotify.com/embed?uri=spotify:track:05bhmaAD1urZnQMWNd6p3S",
        "https://open.spotify.com/embed?uri=spotify:track:6KRHMYPIWRgFWlXPgqO2Fp",
        "https://open.spotify.com/embed?uri=spotify:track:1WHNqqRWhJVZIdCScFKtl5",
        "https://open.spotify.com/embed?uri=spotify:track:0Iys022UwQ8xBfxE1g4nWZ",
        "https://open.spotify.com/embed?uri=spotify:track:4eeN8erNIbW2osT0knz5vT",
        "https://open.spotify.com/embed?uri=spotify:track:68Ijc4fPmT3P5BN6Vrl2s2",
        "https://open.spotify.com/embed?uri=spotify:track:1DLfR4MOfLYbV6v3xrmWa8",
        "https://open.spotify.com/embed?uri=spotify:track:16sNPUamj4vnA7uQLozRpU",
        "https://open.spotify.com/embed?uri=spotify:track:7D1Lf7N7AtCuEq5PGJtIPz",
        "https://open.spotify.com/embed?uri=spotify:track:4B3qvzOMzLQXLeYgPsG3KA",
        "https://open.spotify.com/embed?uri=spotify:track:6lsFGDo1IEEPFKh94c9kFe",
        "https://open.spotify.com/embed?uri=spotify:track:2ydKgIVZAQXeYLWtxU8DFS",
        "https://open.spotify.com/embed?uri=spotify:track:40LYL1Z6xgCn5cBybo5K0D",
        "https://open.spotify.com/embed?uri=spotify:track:0LpHC9mhPAQC98IjXZIrif",
        "https://open.spotify.com/embed?uri=spotify:track:6SHI6STEW51cQkAXBRpLNj",
        "https://open.spotify.com/embed?uri=spotify:track:1dZutYKh4BtPlxbC81wV34",
        "https://open.spotify.com/embed?uri=spotify:track:0P09TBGSKiQwfUsEh1UafT",
        "https://open.spotify.com/embed?uri=spotify:track:7EsSVPxaYoAZjQwhspJBs2"
        ];


    return (
      <div id = "player" style={iframeStyle}>
        <span style = {{marginLeft: '100px', display: 'flex', alignItems: 'right', overflow: 'hidden'}}>
					<iframe src = {values[this.state.option]} 
        width="350" height="80" frameborder="0" allowtransparency="true"></iframe>
        </span>
      </div>
    );
  }
}
