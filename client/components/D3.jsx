import React from 'react';
import Circle from './Circle.jsx'
import Renderer from './Renderer.jsx'

export default class D3 extends React.Component{

  constructor() {
		super();
    this.state = {
        blue: '#00ddff',
			  green: '#00ffdd',
			purple: '#ccaaff',
			x: 0,
			y: 0
		}
	}

  onMoveHandler(event) {
    this.setState({ 
      x: event.clientX - this.state.div.getBoundingClientRect().left, 
      y: event.clientY - this.state.div.getBoundingClientRect().top
    });
		console.log('ayy lmao');
  }

	onClickHandler(event) {
		this.setState({x: event.clientX - this.state.div.getBoundingClientRect().left,
		              y: event.clientY - this.state.div.getBoundingClientRect().top
		});
		console.log(`x: ${this.state.x}, y: ${this.state.y}`);
		this.props.mouse(this.state.x, this.state.y);
	}

	
	componentDidMount() {
		this.state.div = document.getElementById('drawing');
	}

	render() {
		var json = require('../test.json'); //(with path)
		console.log(json);
		var w = this.props.width;
		var h = this.props.height;
		const D3Style = {
			//	width: w,
			//height: h,
			backgroundColor: '#000000',
            display: 'flex',
            justifyContent: 'center',
			alignItems: 'center',
			border: '2px solid grey'
        }

        const svgStyle = {
				}
    
        
					//<Circle x={100} y = {300} r = {50} fill = {this.state.blue} />
          //     <Circle x={300} y = {180} r ={30} fill = {this.state.purple}/>
					//     <Circle x={350} y = {380} r ={40} fill = {this.state.green}/>

	

		//<Renderer indices={this.props.indices} />
		return (
			<div id = 'outter' style={D3Style}>
				<svg id='drawing' width='1000px' height='500px' style={svgStyle} onClick = {this.onClickHandler.bind(this)}>
                </svg>
						<div>
					</div>
					<Renderer funcBack={this.props.funcBack}/>
       </div>
		);
	}
}



