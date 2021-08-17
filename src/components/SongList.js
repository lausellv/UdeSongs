import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    // helper method
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.id}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
  //  console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
 // console.log(state);  // we update our state everytime we update our component
  return { songs: state.songs }; // an object that will show up as a prop in our component
};
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
