/*
  ./client/components/App.jsx
*/

import React from 'react';
import Visualizer from './Visualizer.jsx';
import Header from  './Header.jsx';
import Sidebar from './Sidebar.jsx'



export default class App extends React.Component {
  render() {

    var bgColor = 'rgba(255, 255, 200, 0.2)';

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
      padding: '0'
    };
    document.getElementById('html').style = {
      background: bgColor
    };

    return (
      <div>
        <Sidebar x = ''/>
        <div style={appStyle}>
          <Header />
          <Visualizer root='root'/>
        </div>
      </div>
    );
  }
}
