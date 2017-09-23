/*
  ./client/components/Header.jsx
*/


import React from 'react';

export default class Header extends React.Component{

  constructor(props) {
    super(props);

    this.state = {sidebar : false, sidebarWidth: 160};
  }

  onClickHandler(event) {
    event.preventDefault();

    this.state.sidebar = !this.state.sidebar;
		if (this.state.sidebar) {
			var fullWidth = document.documentElement.clientWidth;
			document.getElementById('sidebar').style.display = 'block';
			document.getElementById('sidebar').style.width = `${this.state.sidebarWidth}px`;
			document.getElementById('header').style.width = `${fullWidth - this.state.sidebarWidth}px`;
			document.getElementById('header').style.marginLeft = `${this.state.sidebarWidth}px`;
			document.getElementById('visualizer').style.width = `${fullWidth - this.state.sidebarWidth}px`;
			document.getElementById('visualizer').style.marginLeft = `${this.state.sidebarWidth}px`;
			}else {
      document.getElementById('sidebar').style.display = 'none';
      document.getElementById('sidebar').style.width = '0vw';
      document.getElementById('header').style.width = '100vw';
      document.getElementById('header').style.marginLeft = '0vw';
      document.getElementById('visualizer').style.width = '100vw';
      document.getElementById('visualizer').style.marginLeft = '0vw';
    }
  }

  render() {
   const headerStyle = {
      height: '120px',
      width: '100vw',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundImage: `url(hamilton_background.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
			backgroundSize: 'cover',
      fontSize: '40px',
      fontFamily: 'Palatino',
      color: 'black',
     // border: '2px solid grey',
      boxSizing: 'border-box',
      margin: '0px'
    }

    return (
      <div id = "header" style={headerStyle}>
        <span style = {{marginLeft: '20px', display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
          <a href = "#" onClick = {this.onClickHandler.bind(this)}>
            <svg width="40" height="24" style = {{strokeWidth: '2px'}}>
              <path d="M0,5 30,5" stroke="grey" />
              <path d="M0,14 30,14" stroke="grey" />
              <path d="M0,23 30,23" stroke="grey" />
            </svg>
          </a>
        </span>
        <span> <b>Hamilton Visualizer</b></span>
        <span style = {{visibility: 'hidden'}}> right </span>
      </div>
    );
  }
}
