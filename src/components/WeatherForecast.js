import React from 'react';
import Moment from 'react-moment';

class WeatherForecast extends React.Component {
    render() {
        return (
            <div>
                <h1>Weather Forecast from Carl:</h1>
                <h3>{this.props.dayOne.day}</h3>
                <Moment format="ddd, MMMM Do YYYY" add={{ days: 1 }}>
                </Moment>
                <Moment format="ddd, MMMM Do YYYY" add={{ days: 2 }}>
                </Moment>
                <Moment format="ddd, MMMM Do YYYY" add={{ days: 3 }}>
                </Moment>
                <Moment format="ddd, MMMM Do YYYY" add={{ days: 4 }}>
                </Moment>
                <Moment format="ddd, MMMM Do YYYY" add={{ days: 5 }}>
                </Moment>
            </div>
        )
    }
}

export default WeatherForecast;
