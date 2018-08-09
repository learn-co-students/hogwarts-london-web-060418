import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hog from './Hog'
import HogList from './HogList'
import HogDetails from './HogDetails'

// const pictureMap = {
//   'Augustus-Gloop': augustus
// }


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hogs: hogs,
      selectedHog: undefined
    }
    // this.selectHog = this.selectHog.bind(this)
    // this.clearSelectedHog = this.clearSelectedHog.bind(this)
  }

  selectHog = (hog) => {
    this.setState({ selectedHog: hog })
  }

  clearSelectedHog = () => {
    this.setState({selectedHog: undefined})
  }

  alphabetisePorcos = () => {
    const newState = [...this.state.hogs]
    this.setState({
      hogs: newState.sort(function(a, b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0
      })
    })
  }

  greasedPorcos = () => {
    this.setState({
      hogs: hogs.filter((hog) => hog.greased === true)
    })
  }

  clearAllHogs = () => {
    this.setState({
      hogs: hogs
    })
  }


  render() {
    return (
      <div className="App">
          <Nav alphabetisePorcos={this.alphabetisePorcos} greasedPorcos={this.greasedPorcos} clearAllHogs={this.clearAllHogs}/>
          {this.state.selectedHog === undefined ?
          <HogList hogs={this.state.hogs} selectHog={this.selectHog} /> :
          <HogDetails hog={this.state.selectedHog} clearSelectedHog={this.clearSelectedHog}/>
        }
      </div>
    )
  }
}

export default App;
