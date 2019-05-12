import React from  'react';

const Conditions = (props)=>{
    return(
        <div>
            <p>Current Conditions:{props.weather}</p>
            <p>Temprature: {(props.main.temp - 273.15).toFixed(2)} c</p>
            <p>Highs: {(props.main.temp_max - 273.15).toFixed(2)}</p>
            <p>Lows: {(props.main.temp_min - 273.15).toFixed(2)}</p>
            <p>Humidity: {props.main.humidity}%</p>
            <p>Pressure: {props.main.pressure}hpa</p>
            <p>Wind Speed: {props.windSpeed}</p>
            <p>Wind Direction: {props.windDirection}</p>
        </div>
    );
}

export default Conditions;