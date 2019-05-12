import React, {Component} from 'react';
import Form from '../componets/Form';
import Conditions from '../componets/Conditions';

export default class Weather extends Component{
    
    state = {
        main:{
            temp: undefined,
            humidity: undefined,
            pressure: undefined,
            tempLow: undefined,
            tempHigh: undefined,
        },
        weather:undefined,
        sunrise:undefined,
        sunset:undefined,
        wind: undefined,
        windDirection: undefined
    }

    getWeather = async (e) =>{
        const API_KEY = 'd90aa3fc06dcb70567957291fbe52031';
        e.preventDefault();

        const city = e.target.city.value;
        const country = e.target.country.value;

        const call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

        const data = await call.json();

        this.setState({
            main:data.main,
            description:data.weather[0].description,
            icon:data.weather[0].icon,
            sunrise: data.sys.sunrise,
            sunset:data.sys.sunset,
            windSpeed: data.wind.speed,
            windDirection: data.wind.deg,

        })
    }

    render(){
        return(
            <div className='weather-container'>
                <Form submit={this.getWeather}/>

                <div className='Data-Container'>

                    <h2>Conditions</h2>
                    <Conditions 
                    main={this.state.main}
                    weather={this.state.description}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    windSpeed = {this.state.windSpeed}
                    windDirection = {this.state.windDirection}
                    icon={this.state.icon}
                    />

                </div>
            </div>
        );
    }
}