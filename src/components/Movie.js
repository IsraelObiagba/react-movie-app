import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Movie">
        <h3 className="Movie-header">{this.props.movieName}</h3>
        <img className="Movie-image" src={this.props.movieImage} alt="..."/>
        <p className="Movie-text">{this.props.movieYear}</p>
        {/* <p className="Movie-text">{this.props.description}</p> */}
      </div>
    )
  }
}

export default Movie;