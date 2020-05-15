import React from "react";
import { connect } from "react-redux";

const SongLyrics = ({ songLyrics }) => {
  //if not found yet
  if (songLyrics === null) return <div />;

  return (
    <div className="card">
      <div className="card-content grey lighten-4">
        <p>{songLyrics.lyrics}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songLyrics: state.songLyrics,
  };
};

export default connect(mapStateToProps, null)(SongLyrics);
