import React from 'react';
import moment from 'moment';
import dateFormat from 'dateformat';


const WeatherForecast = (props) => {
    const iconD1 = props.dayOne.icon;
    const iconD2 = props.dayTwo.icon;
    const iconD3 = props.dayThree.icon;
    const iconD4 = props.dayFour.icon;
    const iconD5 = props.dayFive.icon;

    const iconURL1 = `http://openweathermap.org/img/w/${iconD1}.png`
    const iconURL2 = `http://openweathermap.org/img/w/${iconD2}.png`
    const iconURL3 = `http://openweathermap.org/img/w/${iconD3}.png`
    const iconURL4 = `http://openweathermap.org/img/w/${iconD4}.png`
    const iconURL5 = `http://openweathermap.org/img/w/${iconD5}.png`

    const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    return (
        <div>
            <h1>Weather Forecast from Carl:</h1>
            <div>
                <div>
                    {props.dayOne.date && (new Date(props.dayOne.date)).toLocaleDateString('en-US', DATE_OPTIONS)}<br />
                    {props.dayOne.icon && <img src={iconURL1} alt="open weather design" />}<br />
                    {props.dayOne.description}<br />
                    {props.dayOne.temp && <h5>Temperature: {props.dayOne.temp}</h5>}
                    {props.dayOne.humidity && <h5>Humidity: {props.dayOne.humidity}</h5>}
                </div>
            </div>



        </div>
    )
}

export default WeatherForecast;
