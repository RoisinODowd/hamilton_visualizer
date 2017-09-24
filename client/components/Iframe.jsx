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

export default class Iframe extends React.Component{

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

    return (
      <div id = "player" style={iframeStyle}>
        <span style = {{marginLeft: '100px', display: 'flex', alignItems: 'right', overflow: 'hidden'}}>
        <iframe src="https://open.spotify.com/embed?uri=spotify:track:4TTV7EcfroSLWzXRY6gLv6"
        width="250" height="80" frameborder="0" allowtransparency="true"></iframe>
        </span>
      </div>
    );
  }
}
