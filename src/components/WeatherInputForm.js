import React from 'react';

class WeatherInputForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.fiveDayForecast}>
                <input type="text" name="city" placeholder="what city are you located in?" />
                <input type="text" name="country" placeholder="which country are you located in?" />
                <button>Weather Mr. Carl</button>
            </form>
        )
    }
}

export default WeatherInputForm;
