import React from 'react';

const WeatherInputForm = (props) => {
    return (
        <form onSubmit={props.fiveDayForecast}>
            <input type="text" name="city" placeholder="what city are you located in?" />
            <input type="text" name="country" placeholder="which country are you located in?" />
            <button>Weather Me, Carl</button>
        </form>
    )
}




export default WeatherInputForm;
