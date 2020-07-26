import React, { Component } from 'react'

export class FindWeather extends Component {
  constructor() {
    super();
    this.state = {
      place: ''
    }
  }

onChangePlace(){
  this.props.changePlace(this.state.place)

}

 onSubmit = (e) => {
   e.preventDefault();
   this.props.fetchData();
  console.log(this.state.place);
}

onChange = (e) => this.setState({ place: e.target.value });


  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex', padding: '0 1rem', }}>
        <input type="text" style={{ flex: '10', padding: '5px'}} name='name'
        placeholder='Search...' value={this.state.name} onChange={this.onChange}/>
        <input onClick={this.onChangePlace.bind(this)} type="submit" value='submit' className='btn' style={{flex: '1'}}/>
      </form>
    )
  }
}

export default FindWeather
