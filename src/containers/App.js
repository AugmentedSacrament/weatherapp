import React,{Component} from 'react';
import '../css/app.css';
import Sidebar from '../componets/Sidebar';
import Weather from '../componets/Weather';
import Form  from '../componets/Form'

const API_KEY = 'd90aa3fc06dcb70567957291fbe52031';

class App extends Component{

  state={
    temp:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather= async (e)=> {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
 
    const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const data = await call.json();
    console.log(data);
    
    this.setState({
      temp:data.main.temp,
      city: data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description: data.weather[0].description
    });
  
  }

  render(){
    return(
      <div className='wrapper'>
        <Sidebar/>
        
        <Form getweather={this.getWeather}/>

        <Weather
        temp={this.state.temp} 
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}/>
      </div>
    );
  }

}

export default App;
