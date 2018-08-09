import React from 'react'

class HogDetails extends React.Component {

  greaseString = (greased) => {
    if (greased === true){
      return "Greasy"
    } else {
      return "Clean"
    }
  }

  render() {
    let copiedHogsName = this.props.hog.name
    copiedHogsName= copiedHogsName.split(" ").join("_").toLowerCase()
    let imageSrc = `../hog-imgs/${copiedHogsName}.jpg`

    return (
      <div onClick={this.props.clearHog} className="ui eight wide column" style={{border: "1px solid #000"}}>
        <h3>{this.props.hog.name}</h3>
        <img src= {imageSrc} />
        <p>{this.greaseString(this.props.hog.greased)}</p>
        <p>Weight ratio: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Highest medal achieved: {this.props.hog['highest medal achieved']}</p>
      </div>
    )
  }

}

export default HogDetails;


// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// },
