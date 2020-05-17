import React from "react";
import { connect } from "react-redux";

import NoLyricsError from "./NoLyricsError";

const SongLyrics = ({ songLyrics, searchedTerm, selectedVideo }) => {
  //if no seachterm provided
  if (
    (searchedTerm === null && selectedVideo === null) ||
    (searchedTerm !== null && selectedVideo === null)
  ) {
    return <div />;
  }

  //provided searchTerm & clicked on a video to show it, found no lyrics
  if (selectedVideo !== null && songLyrics === null) {
    return <NoLyricsError />;
  }
  const { artist, songTitle } = searchedTerm;

  return (
    <div
      className="card"
      style={{
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <span className="card-title">{`${artist.toUpperCase()}-${songTitle.toUpperCase()}`}</span>

      <div
        className="card-content"
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        <p>{songLyrics.lyrics}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songLyrics: state.songLyrics,
    searchedTerm: state.searchedTerm,
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, null)(SongLyrics);
