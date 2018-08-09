import React from 'react'

class HogDetails extends React.Component {

  generatePath(name){
    return  `../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`
  }

  render() {
    return (
      <div>
        <img src={this.generatePath(this.props.hog.name)} />
        <h3> Name: {this.props.hog.name} </h3>
        <p> Specialty: {this.props.hog.specialty}</p>
        <p> {this.props.hog.greased ? "SO GREASY MMMM" : "Sadly, not greasy."} </p>
        <p> Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</p>
        <button onClick={() => this.props.clearSelectedHog()}>Back to all porkers</button>
      </div>
    )
  }
}

HogDetails.defaultProps = {
    name: 'Galaxy Note',
    specialty: 'Airport Security',
    greased: true,
    'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.9,
    'highest medal achieved': 'diamond'
}

export default HogDetails
