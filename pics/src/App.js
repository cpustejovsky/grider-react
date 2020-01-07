import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

export default class App extends Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const rootUrl = "https://api.unsplash.com/";
    const response = await axios.get(`${rootUrl}/search/photos`, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      }
    })
    this.setState({ this.state.images: response.data.results });
    console.log(this.state.images)
    console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY)
    console.log(process.env.REACT_APP_UNSPLASH_SECRET_KEY)
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
