import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Movie">
        <h3 className="Movie-header">{this.props.title}</h3>
        <img className="Movie-image" src={this.props.poster} alt="..."/>
        <p className="Movie-text">{this.props.year}</p>
        <p className="Movie-text">{this.props.description}</p>
      </div>
    )
  }
}

export default Movie;