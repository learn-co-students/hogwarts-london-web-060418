import React from 'react'


class Hog extends React.Component {

  generatePath(name){
    return  `../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`
  }

  render() {
    return (
      <div className="ui eight wide column" onClick={() => this.props.selectHog(this.props.hog)}>
          <img src={this.generatePath(this.props.hog.name)} />
          <p>{this.props.hog.name}</p>
      </div>
    )
  }
}

Hog.defaultProps = {
  picture: 0
}

export default Hog;
