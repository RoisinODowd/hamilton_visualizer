import React from 'react'

export default class Circle extends React.Component{

    render() {

        var width = 2*this.props.r;
        var height = width;
        var color = this.props.fill;
        var x = this.props.x;
        var y = this.props.y;

        return(
           // <svg width={width} height = {height}>
                <circle cx={x} cy={y} r={width/2} fill={color} stroke = '#00ccff' fillOpacity='0.7' strokeWidth='2'/>
           // </svg>
        );
    }

}
