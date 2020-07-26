import React, { Component } from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FindWeather from './components/FindWeather';
import WeatherInfo from './components/WeatherInfo';
import Button from '@material-ui/core/Button';

import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    place: null,
    temp: null,
    highTemp: null,
    lowTemp: null,
    icon: null,
    description: null,
    data: null,
    showTomorrowDate: false,
    showWeather: false
  }
}


async fetchData(){
  if(this.state.place)
  try {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q='+this.state.place+'&units=imperial&appid=71baf7e436d5f64edb9036bb3dacff3e'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      temp: data.list[0].main.temp,
      highTemp: data.list[0].main.temp_max,
      lowTemp: data.list[0].main.temp_min,
      icon: data.list[0].weather[0].icon,
      description: data.list[0].weather[0].description,
      data: data,
      showTomorrowDate: false,
      showWeather: true
    });
 } catch (error){
   this.setState({ showWeather: false })
   alert('Sorry, Cant Find Place');
 }
}


async componentDidMount() {
  await this.fetchData();
}

 onChangePlace(newPlace){
  this.setState({
        place: newPlace
  });
 }

 showTomorrow(){
   this.setState({
     temp: this.state.data.list[1].main.temp,
     highTemp: this.state.data.list[1].main.temp_max,
     lowTemp: this.state.data.list[1].main.temp_min,
     icon: this.state.data.list[1].weather[0].icon,
     description: this.state.data.list[1].weather[0].description,
     showTomorrowDate: true
   })
 }

 showToday(){
   this.setState({
     showTomorrowDate: false,
     temp: this.state.data.list[0].main.temp,
     highTemp: this.state.data.list[0].main.temp_max,
     lowTemp: this.state.data.list[0].main.temp_min,
     icon: this.state.data.list[0].weather[0].icon,
     description: this.state.data.list[0].weather[0].description
   })
 }


  render() {
  return (
    <div className="App">
      <Header />
      <FindWeather fetchData={this.fetchData.bind(this)} changePlace={this.onChangePlace.bind(this)} />
      <div className='container' style={{display:(this.state.showWeather? 'block':'none'),
                                         borderBottom: 'solid 2px',padding: '10px'}}>
          <WeatherInfo weather={this.state}/>
          <Button variant='outlined' color='primary' onClick={this.showToday.bind(this)}>Today</Button> <Button variant='outlined' onClick={this.showTomorrow.bind(this)}>Tomorrow</Button>
      </div>
    </div>
  );
 }
}



export default App;
