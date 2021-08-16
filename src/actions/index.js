//action creator that returns actions (payload is optional in Redux )
export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
