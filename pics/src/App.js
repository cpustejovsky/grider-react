import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Unsplash from './api/unsplash';

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await Unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container top-margin">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }
}
