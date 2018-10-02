import React, { Component } from 'react';
import './App.css';

import Headers from "./components/Headers";
import WeatherInputForm from './components/WeatherInputForm';
import WeatherForecast from './components/WeatherForecast';

const API_KEY = "88e8b514c7118f3ea9ba22682e0ee9f7";


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      dayOne: {
        icon: '',
        date: '',
        temp: '',
        humidity: '',
        description: ''
      },
      dayTwo: {
        icon: '',
        temp: '',
        humidity: '',
        description: ''
      },
      dayThree: {
        icon: '',
        temp: '',
        humidity: '',
        description: ''
      },
      dayFour: {
        icon: '',
        temp: '',
        humidity: '',
        description: ''
      },
      dayFive: {
        icon: '',
        temp: '',
        humidity: '',
        description: ''
      },
      error: undefined
    }
  }
  fiveDayForecast = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      city: data.city.name,
      country: data.city.country,
      dayOne: {
        icon: data.list[0].weather[0].icon,
        date: data.list[0].dt_txt,
        temp: data.list[0].main.temp,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description
      },
      dayTwo: {
        icon: data.list[7].weather[0].icon,
        temp: data.list[7].main.temp,
        humidity: data.list[7].main.humidity,
        description: data.list[7].weather[0].description
      },
      dayThree: {
        icon: data.list[15].weather[0].icon,
        temp: data.list[15].main.temp,
        humidity: data.list[15].main.humidity,
        description: data.list[15].weather[0].description
      },
      dayFour: {
        icon: data.list[23].weather[0].icon,
        temp: data.list[23].main.temp,
        humidity: data.list[23].main.humidity,
        description: data.list[23].weather[0].description
      },
      dayFive: {
        icon: data.list[31].weather[0].icon,
        temp: data.list[31].main.temp,
        humidity: data.list[31].main.humidity,
        description: data.list[31].weather[0].description
      },
      error: '',
    })
  }

  render() {
    return (
      <div>
        <Headers />
        <WeatherInputForm fiveDayForecast={this.fiveDayForecast} />
        <WeatherForecast
          city={this.state.city}
          country={this.state.country}
          dayOne={this.state.dayOne}
          dayTwo={this.state.dayTwo}
          dayThree={this.state.dayThree}
          dayFour={this.state.dayFour}
          dayFive={this.state.dayFive}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
