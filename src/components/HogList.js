import React from 'react'

import Hog from './Hog'
import HogDetails from './HogDetails'

class HogList extends React.Component {

  state={
    selectedHog: undefined
  }

  selectHog = (hog) => {
    this.setState({
      selectedHog: hog
    })
  }

  clearSelectedHog = () => {
    this.setState({
      selectedHog: undefined
    })
  }

  // {
  //   this.state.selectedHog === undefined ?
  //   < HogDetails hog={this.state.selectedHog} clearSelectedHog={this.clearSelectedHog} />
  // }

  render() {

    let renderedHogs = this.props.hogs.map((hog) => {
      //if hog is selected hog, return hog details, and still render the other hogs
      // if (this.state.selectedHog.name === hog.name) {
      //   return <HogDetails hog={hog} />
      // } else {
        return <Hog hog={hog} selectHog={this.selectHog} />
      // }
    })

    return (
      <div className="ui grid container">
        {this.state.selectedHog ? <HogDetails hog={this.state.selectedHog} clearHog={this.clearSelectedHog} /> : renderedHogs}
      </div>
    )
  }

}


export default HogList;
