import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import HogList from './HogList'

class App extends Component {

  state={
    hogs: [...hogs],
    hidden: false,
  }

  sortHogsByName = () => {
    const hogsSortedByName = hogs.slice().sort((a,b) => {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    });
    this.setState({
      hogs: hogsSortedByName
    })
  }

  sortHogsByWeight = () => {
    const hogsSortedByWeight = hogs.slice().sort((a,b) => {
      const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
      return (a[weight] > b[weight]) ? 1 : ((b[weight] > a[weight]) ? -1 : 0);
    });
    this.setState({
      hogs: hogsSortedByWeight
    })
  }

  filterGreasy = () => {
    const greasyHogs = hogs.filter((hog) => {
      return hog.greased
    });
    this.setState({
      hogs: greasyHogs
    })
  }

  filterClean = () => {
    const cleanHogs = hogs.filter((hog) => {
      return hog.greased === false
    });
    this.setState({
      hogs: cleanHogs
    })
  }

  reset = () => {
    this.setState({
      hogs: [...hogs]
    })
  }

  toggleHogs = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <button onClick={this.sortHogsByName} >SORT PIGS BY NAME</button>
        <button onClick={this.sortHogsByWeight} >SORT PIGS BY WEIGHT</button>
        <button onClick={this.filterClean} >FILTER clean PIGLETS</button>
        <button onClick={this.filterGreasy} >FILTER greasy PIGLETS</button>
        <button onClick={this.reset} >RESET</button>
        <button onClick={this.toggleHogs} >TOGGLE HOGS</button>
        < Nav />
        < HogList hogs={this.state.hidden ? [] : this.state.hogs} />
      </div>
    )
  }
}

export default App;
