import React from "react";
import App from "./App";

class Search extends  React.Component {
  constructor(props) {
    super(props)
    this.state = {
      texts: ""
    }
  }

  // Method to search input field
  setValue = (event) => {
    console.log(event.target.value);
    this.setState({
      texts: event.target.value
    })
  }

  // Method to submit the search form
  submitForm = (event) => {
    // This calls the submitSearch method in App.js
    this.props.letSubmit(this.state.texts);
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h3>Search Movies</h3>
        <input 
          value={this.state.texts}
          onChange={this.setValue}
          placeholder="Type your search value here..." />
        <button>Search</button>
      </form>
    )
  }
}

export default Search;