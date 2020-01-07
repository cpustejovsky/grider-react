import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

export default class App extends Component {

  onSearchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className="ui container top-margin">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList></ImageList>
      </div>
    )
  }
}
