/*
  ./client/components/App.jsx
*/

import React from 'react';
import Visualizer from './Visualizer.jsx';
import Header from  './Header.jsx';
import Sidebar from './Sidebar.jsx'



export default class App extends React.Component {

	constructor() {
		super();
		this.state = {label: 0};
	}

  processText(song) {
		this.state = {label: song};
		this.setState(this.state);
		document.getElementById('fuck').scrollTop = 0;

	}

  render() {

    var bgColor = 'rgba(255, 255, 255, .8)';

    const appStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0px',
      margin: '0px',
      width: '100vw',
      height: '100vh',
      background: bgColor,
      overflow: 'hidden'
    };

    document.getElementById('body').style = {
      background: bgColor,
      margin: '0',
			padding: '0',
			overflow: 'hidden'
    };
    document.getElementById('html').style = {
			background: '#000',
			overflow: 'hidden'
    };

    return (
      <div>
        <Sidebar x = ''/>
        <div style={appStyle}>
          <Header func={this.processText.bind(this)}/>
          <Visualizer label={this.state.label} root='root'/>
        </div>
      </div>
    );
  }
}
