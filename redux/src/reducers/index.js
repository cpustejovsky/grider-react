import { combineReducers, createStore } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "5:02" },
    { title: "In Bloom", duration: "4:15" },
    { title: "Come As You Are", duration: "3:39" },
    { title: "Breed", duration: "3:04 " }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

const combinedReducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

export default createStore(combinedReducers);