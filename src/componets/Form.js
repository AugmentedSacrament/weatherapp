import React, {Component} from 'react';

export default class Form extends Component{
    render(){
        return(
            <form onSubmit={this.props.getweather}>
                <input type='text' name='city' placeholder='City'/>

                <input type='text' name='country' placeholder ='Country'/>
                <button type='submit'>
                    Get The Weather
                </button>
            </form>
        );
    }
}