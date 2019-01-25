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

  render() {
    let renderedHogs = this.props.hogs.map((hog) => {
        return <Hog hog={hog} selectHog={this.selectHog} />
    })
    return (
      <div className="ui grid container">
        {this.state.selectedHog ?
          <HogDetails hog={this.state.selectedHog} clearHog={this.clearSelectedHog} />
          : renderedHogs}
      </div>
    )
  }

}


export default HogList;
