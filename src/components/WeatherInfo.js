import React, { Component } from 'react';

export class WeatherInfo extends Component {
  constructor() {
    super();
        let today = new Date();
        let days =  ['Sunday','Monday','tuesday','Wednesday','Thursday','Friday','Saturday'];
        let day = days[today.getDay()]
        let day2 = days[today.getDay()+1]
        let date = today.toLocaleString('en-US', {hour: 'numeric', hour12: true});

      this.state = {
        date: date,
        day: day,
        tomorrowDate: day2
      }
  }

 TodayTomorrow(){
  if(this.props.weather.showTomorrowDate){
     if(this.state.tomorrowDate !== undefined){
       return <div style={{fontSize: '13px', paddingTop: '5px',color: '#878787'}}>
              {this.state.tomorrowDate}
            </div>
          }else {
            return <div style={{fontSize: '13px', paddingTop: '5px',color: '#878787'}}>
                    Sunday
                 </div>
          }
  }else {
    return  <div style={{fontSize: '13px', paddingTop: '5px',color: '#878787'}}>
              {this.state.day}, {this.state.date}
            </div>
    }
}

capitalize(str){
  if(this.props.weather.place){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
}


  render() {
    return(
       <div style={weatherStyle}>
          <div style={{ margin: '0px', maxHeight: '40px', fontSize: '40px', color: '#878787'}}>{ this.capitalize(this.props.weather.place) }</div>
            {this.TodayTomorrow()}
          <img src={'http://openweathermap.org/img/w/'+this.props.weather.icon+'.png' } alt='weather icon' />
          <div style={{ float: 'right'}}>
              <div style={{ fontSize: '30px'}}>{Math.round(this.props.weather.temp)}℉</div>
              <div style={{fontSize: '12px'}}>{this.props.weather.lowTemp}° {this.props.weather.highTemp}°</div>
          </div>
       </div>
    )
  }
}


const weatherStyle = {
  textAlign: 'left',
  overflow: 'hidden'
}

export default WeatherInfo
