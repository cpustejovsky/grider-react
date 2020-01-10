import React, { Component } from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetail';
import VideoList from './components/VideoList';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="ui container">
        <SearchBar/>
        </div>
        <VideoDetails/>
        <VideoList/>
      </div>
    )
  }
}
