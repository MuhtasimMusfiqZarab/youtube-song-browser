import React from "react";
import { connect } from "react-redux";

const SongLyrics = ({ songLyrics, selectedVideo }) => {
  //if not found yet
  if (songLyrics === null) return <div />;
  const { title } = selectedVideo.snippet;

  return (
    <div className="card" style={{ textAlign: "center", boxShadow: "none" }}>
      <span className="card-title">{title}</span>

      <div className="card-content" style={{ whiteSpace: "pre-wrap" }}>
        <p>{songLyrics.lyrics}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songLyrics: state.songLyrics,
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, null)(SongLyrics);
