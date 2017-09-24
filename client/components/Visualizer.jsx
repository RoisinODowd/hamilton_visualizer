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
	  this.state = {motifs:  json["motifs"]};
		console.log(this.state.motifs);
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
				<D3 id='maind3' width='1000px' height='600px' />
				<Scrollpane id='scroll' width='34vw' height='600px' lineHeight='18px' lineHeightNumber='18' />
			</div>
    );
  }
}
