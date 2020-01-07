import React from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
function App() {
  return (
    <div className="ui container top-margin">
      <SearchBar></SearchBar>
      <ImageList></ImageList>
    </div>
  );
}

export default App;
