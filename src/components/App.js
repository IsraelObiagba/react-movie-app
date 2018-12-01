import React, { Component } from 'react';
import '../App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

import imageLoader from "../loader3.gif";

class App extends Component {
  constructor(props) {
    super(props)
    // This is a keyword
    this.state = {
      movies: [],
      loading: true,
      search: "man"
    } 
  }

  componentDidMount() {
    this.searchMovie();
  }

  // Note: this.setState is a syncronous function

  searchMovie = () => {
    // Loading state is very important
    this.setState({
      loading: true
    });
    fetch("https://www.omdbapi.com/?s=" + this.state.search + "&apikey=feea857")
      .then(res => res.json())
      .then(jsonres => {
        this.setState({
          movies: jsonres.Search || [],
          loading: false
        })
        console.log(jsonres.Search)
      }).catch(error => {
        console.log(error)
        this.setState({
          loading: false
        })
      })
  }

  submitSearch = (value) => {
    // this.setState({
    //   search: value
    // });
    // this.searchMovie();

    // To ensure our this.searchMovie() always return, we write
    // the above code in another way - passing an anonymous callback function
    this.setState({
      search: value
    }, () => {
      this.searchMovie();
    });
  }

  render() {
    return (
      <div className="App">
        <Header title="ABOUT" count={2} />
        <div className="Search-movies">
          <Search letSubmit={this.submitSearch} />
        </div>
        <div className="App-movies">
          {
            this.state.loading ? (<img className="image-loader" src={imageLoader} alt=""/>)
            : this.state.movies.map((movie, index) => (
                <Movie
                key={index}
                movieName={movie.Title}
                movieImage={movie.Poster}
                movieYear={movie.Year}
              // description={movie.description} 
              />
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
