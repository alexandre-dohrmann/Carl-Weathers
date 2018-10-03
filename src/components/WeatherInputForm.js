import React from 'react';

const WeatherInputForm = (props) => {
    return (
        <div>
            <h4 className="directions"><span className="directions-1">5-DAY</span><span className="directions-2"> FORECAST</span> DIRECTIONS: </h4>
            <h4 className="directions-text"> Simply input your city <span className="directions-text-emphasis">(e.g. New York, NY)</span> and country <span className="directions-text-emphasis">(e.g. US)</span> and let Carl do the rest!</h4>
            <form className="five-day-form" onSubmit={props.fiveDayForecast}>
                <input type="text" name="city" placeholder="City, State" />
                <input type="text" name="country" placeholder="Country" />
                <button className="btn btn-primary btn-lg active" aria-pressed="true">Weather Me, Carl!</button>
            </form>
        </div>

    )
}




export default WeatherInputForm;
