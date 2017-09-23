/*
  ./client/components/Sidebar.jsx
*/

import React from 'react';


export default class Sidebar extends React.Component {

  onClickHandler(event) {
    event.preventDefault();    
  }

  
  render() {
		console.log(this.props.x );

    /*
            <path d="M0,5 30,5" stroke="white" />
            <path d="M0,14 30,14" stroke="white" />
            <path d="M0,23 30,23" stroke="white" /> 
    */
    return (<div id = 'sidebar' style={
      {
        zIndex: '1', width: '0vw', height: '100vh', background: 'rgba(80, 100, 100, 0.7)', position: 'absolute',
        display: 'none'
      }
      }>
      <span style = {{marginLeft: '0px', paddingLeft: '0px', marginTop: '30px', display: 'flex', alignItems: 'center'}}>
        <div href="#" onClick = {this.onClickHandler.bind(this)}>
          <svg width="30" height="24" style = {{strokeWidth: '2px'}}>
            
          </svg>
        </div>
      </span>
      </div>);
  }
}
