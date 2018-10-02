import React from 'react';
import moment from 'moment';
import dateFormat from 'dateformat';


class WeatherForecast extends React.Component {
    render(props) {
        const iconD1 = this.props.dayOne.icon;
        const iconD2 = this.props.dayTwo.icon;
        const iconD3 = this.props.dayThree.icon;
        const iconD4 = this.props.dayFour.icon;
        const iconD5 = this.props.dayFive.icon;

        const iconURL1 = `http://openweathermap.org/img/w/${iconD1}.png`
        const iconURL2 = `http://openweathermap.org/img/w/${iconD2}.png`
        const iconURL3 = `http://openweathermap.org/img/w/${iconD3}.png`
        const iconURL4 = `http://openweathermap.org/img/w/${iconD4}.png`
        const iconURL5 = `http://openweathermap.org/img/w/${iconD5}.png`

        const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

        return (
            <div>
                <h1>Weather Forecast from Carl:</h1>
        { this.props.dayOne.icon && <img src={iconURL1} alt="open weather design"/> }
        { this.props.dayOne.date && (new Date(this.props.dayOne.date)).toLocaleDateString('en-US', DATE_OPTIONS)}
                

            </div>
        )
    }
}

export default WeatherForecast;
