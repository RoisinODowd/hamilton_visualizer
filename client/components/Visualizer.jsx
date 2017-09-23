/*
  ./client/components/Visualizer.jsx
*/


import React from 'react';
import D3 from './D3.jsx'

export default class Visualizer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var fullHeight = document.documentElement.clientHeight;
    const mainStyle = {
      width: '100%',
      height: `${fullHeight - 120 - 20}px`,
      background: 'rgba(80, 130, 160, 0.2)',
      //border: '2px grey solid',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '20px',
      paddingLeft: '0',
      marginLeft: '0px',
      boxStyle: 'border-box',
      overflow: 'hidden'
    }
    return (
			<div ref='elem' id = 'visualizer' style = {mainStyle}>
				<D3 width='500px' height='750px' />
				<D3 width='500px' height='750px' />
			</div>
    );
  }
}
