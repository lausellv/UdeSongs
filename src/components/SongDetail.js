import React from "react";
import { connect } from "react-redux";

const SongDetail = ({selectedSong})=>{
 if (!selectedSong) {
   return <div>Select a Song</div>
 }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}
      <br/>
      Duration: {selectedSong.duration}</p>
    
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.selectedSong);  // we update our state everytime we update our component
  return { selectedSong: state.selectedSong }; // an object that will show up as a prop in our component
};

export default connect (mapStateToProps )(SongDetail);

