import React, {Component} from 'react';
export default class Weather extends Component{
    
    render(){

        return(
            <div>
                <div>
                    <h2> {this.props.city} {this.props.country} </h2>
                </div>
                <div>
                    <p>Temprature:{this.props.temp}</p>
                    <p>Humidity{this.props.humidity}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}