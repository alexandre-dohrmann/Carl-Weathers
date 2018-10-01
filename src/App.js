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
      dayOne: [],
      dayTwo: [],
      dayThree: [],
      dayFour: [],
      dayFive: [],
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
      dayOne: [{
        day: data.list[0],
        icon: data.list[0].weather[0].icon
      }],
      dayTwo: data.list[7],
      dayThree: data.list[15],
      dayFour: data.list[23],
      dayFive: data.list[31],
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
