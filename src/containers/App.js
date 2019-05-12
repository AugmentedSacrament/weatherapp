import React,{Component} from 'react';
import '../css/app.css';
import Weather from '../componets/Weather';

class App extends Component{

  render(){
    return(
      <div className='wrapper'>
        <Weather/>
      </div>
    );
  }

}

export default App;
