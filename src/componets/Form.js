import React, {Component} from 'react';

export default class Form extends Component{

    render(){
        return(
            <form className='form' onSubmit={this.props.submit}>

                <label htmlFor='city'>City:</label>
                <input 
                type='text' name='city' placeholder='City'/>
                <label htmlFor='country'>Country:</label>
                <input type='text' name='country' placeholder ='Country'/>

                <button type='submit'>
                    Get The Weather
                </button>
            </form>
        );
    }
}