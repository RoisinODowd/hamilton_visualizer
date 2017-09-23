/*
  ./client/components/Visualizer.jsx
*/


import React from 'react';
import D3 from './D3.jsx'
import Scrollpane from './Scrollpane.jsx'

export default class Visualizer extends React.Component{

  constructor(props) {
    super(props);
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
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '5px',
      paddingLeft: '0',
      marginLeft: '0px',
      boxStyle: 'border-box',
      overflow: 'hidden',
      backgroundImage: `url(hamilton_background.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
<<<<<<< HEAD
			backgroundSize: '100%',
=======
      backgroundSize: 'cover',
      border: '50px',
      borderColor: 'white'

>>>>>>> 56f8a5284f583f3a771f1b2fac053cdeef798537
    }
    return (
			<div ref='elem' id = 'visualizer' style = {mainStyle}>
				<D3 width='500px' height='600px' />
<<<<<<< HEAD
				
        <img src = {'http://vignette3.wikia.nocookie.net/central/images/9/9c/Hamilton_star_transparent_background.png/revision/latest?cb=20160708221146'} />
				<Scrollpane width='500px' height='600px' lineHeight='18px' lineHeightNumber='18' />
=======
>>>>>>> 56f8a5284f583f3a771f1b2fac053cdeef798537
			</div>
    );
  }
}
