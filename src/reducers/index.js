import { combinedReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "I want it that way", duration: "1:45" },
    { title: "Is this it", duration: "3:15" },
    { title: "No love", duration: "3:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combinedReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
