import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header className="App-header">
        <h1>Santi Movies</h1>
        {/* <p>{this.props.title}</p>
        <p>{this.props.count}</p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a> */}
      </header>
    )
  }
}

export default Header;