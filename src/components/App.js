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
    this.selectHog = this.selectHog.bind(this)
    this.clearSelectedHog = this.clearSelectedHog.bind(this)
  }

  selectHog(hog) {
    this.setState({ selectedHog: hog })
  }

  clearSelectedHog() {
    this.setState({selectedHog: undefined})
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <HogDetails hog={hogs[0]}/>
          <HogList hogs={this.state.hogs} selectHog={this.selectHog} />
      </div>
    )
  }
}

export default App;
