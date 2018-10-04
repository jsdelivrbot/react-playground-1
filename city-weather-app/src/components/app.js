import React, { Component } from "react";

import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";
import AvailabilityStatus from "./availability-status";
import Header from "./header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <AvailabilityStatus />
        <WeatherList />
      </div>
    );
  }
}
