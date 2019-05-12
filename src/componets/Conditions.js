import React from  'react';

const Conditions = (props)=>{
    
    return(
        <div className='conditions'>
            <img className='icon' src={`http://openweathermap.org/img/w/${props.icon}.png`} alt=''/>
            <p>Current Conditions: {props.weather}</p>
            <p>Temprature: {(props.main.temp - 273.15).toFixed(2)} c</p>
            <p>Highs: {(props.main.temp_max - 273.15).toFixed(2)}</p>
            <p>Lows: {(props.main.temp_min - 273.15).toFixed(2)}</p>
            <p>Humidity: {props.main.humidity}%</p>
            <p>Pressure: {props.main.pressure}hpa</p>
            <p>Wind Speed: {props.windSpeed}</p>
            <p>Wind Direction: {props.windDirection} degees</p>
        </div>
    );
}

export default Conditions;