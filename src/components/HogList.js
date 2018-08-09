import React from 'react'
import Hog from './Hog'

class HogList extends React.Component {
  render() {
    return (
      <div className="ui grid container">
          {this.props.hogs.map((hog) => <Hog hog={hog} selectHog={this.props.selectHog}/>)}
      </div>
    )
  }
}

export default HogList;
