import React from 'react'

class Hog extends React.Component {
  // state(){
  //   this.clicked: false
  // }
  // let handleClick = (event) => {
  //   setState({this.clicked: true})
  //
  // }

  render() {
    let copyHogsName = this.props.hog.name
    copyHogsName= copyHogsName.split(" ").join("_").toLowerCase()
    let imageSrc = `../hog-imgs/${copyHogsName}.jpg`

    return (
      <div onClick={() => this.props.selectHog(this.props.hog)} className="ui eight wide column" style={{border: "1px solid #000"}}>
        <h3>{this.props.hog.name}</h3>
        <img src= {imageSrc} />
      </div>
    )
  }

}

export default Hog;
