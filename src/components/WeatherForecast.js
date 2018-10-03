import React from 'react';

const WeatherForecast = (props) => {
    // Creating Icon Variables for each of the icon codes for each day.
    const iconD1 = props.dayOne.icon;
    const iconD2 = props.dayTwo.icon;
    const iconD3 = props.dayThree.icon;
    const iconD4 = props.dayFour.icon;
    const iconD5 = props.dayFive.icon;

    // Creating Icon URL Variables for each of the icon variables for each day.
    const iconURL1 = `http://openweathermap.org/img/w/${iconD1}.png`
    const iconURL2 = `http://openweathermap.org/img/w/${iconD2}.png`
    const iconURL3 = `http://openweathermap.org/img/w/${iconD3}.png`
    const iconURL4 = `http://openweathermap.org/img/w/${iconD4}.png`
    const iconURL5 = `http://openweathermap.org/img/w/${iconD5}.png`

    // Creating a universal date/time variable for each day to be displayed nicely from the JSON time-date stamp.
    const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
            {/* Using Logical && Operators to get the component to display all at once for the 5-day forecast */}
            {props.city && <h4 className="directions">Carl's 5-Day Weather Forecast for: <br /><span className="directions-city">{props.city}, </span><span className="directions-city">{props.country}</span></h4>}
            {props.country && <div className="col-xs-12 weather-list">
                <div className="weather-item">
                    {props.dayOne.date && (new Date(props.dayOne.date)).toLocaleDateString('en-US', DATE_OPTIONS)}<br />
                    {props.dayOne.icon && <img src={iconURL1} alt="open weather design" />}<br />
                    <small className="weather-description">{props.dayOne.description}</small><br />
                    {props.dayOne.temp && <h5 className="temps">{props.dayOne.temp} °F</h5>}
                    {props.dayOne.humidity && <h5>Humidity: {props.dayOne.humidity}</h5>}
                </div>
                <div className="weather-item">
                    {props.dayTwo.date && (new Date(props.dayTwo.date)).toLocaleDateString('en-US', DATE_OPTIONS)}<br />
                    {props.dayTwo.icon && <img src={iconURL2} alt="open weather design" />}<br />
                    <small className="weather-description">{props.dayTwo.description}</small><br />
                    {props.dayTwo.temp && <h5 className="temps">{props.dayTwo.temp} °F</h5>}
                    {props.dayTwo.humidity && <h5>Humidity: {props.dayTwo.humidity}</h5>}
                </div>
                <div className="weather-item">
                    {props.dayThree.date && (new Date(props.dayThree.date)).toLocaleDateString('en-US', DATE_OPTIONS)}<br />
                    {props.dayThree.icon && <img src={iconURL3} alt="open weather design" />}<br />
                    <small className="weather-description">{props.dayThree.description}</small><br />
                    {props.dayThree.temp && <h5 className="temps">{props.dayThree.temp} °F</h5>}
                    {props.dayThree.humidity && <h5>Humidity: {props.dayThree.humidity}</h5>}
                </div>
                <div className="weather-item">
                    {props.dayFour.date && (new Date(props.dayFour.date)).toLocaleDateString('en-US', DATE_OPTIONS)}<br />
                    {props.dayFour.icon && <img src={iconURL4} alt="open weather design" />}<br />
                    <small className="weather-description">{props.dayFour.description}</small><br />
                    {props.dayFour.temp && <h5 className="temps">{props.dayFour.temp} °F</h5>}
                    {props.dayFour.humidity && <h5>Humidity: {props.dayFour.humidity}</h5>}
                </div>
                <div className="weather-item">
                    {props.dayFive.date && (new Date(props.dayFive.date)).toLocaleDateString('en-US', DATE_OPTIONS)}<br />
                    {props.dayFive.icon && <img src={iconURL5} alt="open weather design" />}<br />
                    <small className="weather-description">{props.dayFive.description}</small><br />
                    {props.dayFive.temp && <h5 className="temps">{props.dayFive.temp} °F</h5>}
                    {props.dayFive.humidity && <h5>Humidity: {props.dayFive.humidity}</h5>}
                </div>
            </div>
            }
        </div>
    )
}

export default WeatherForecast;
