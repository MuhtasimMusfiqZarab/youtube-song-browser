import React from "react";
import { connect } from "react-redux";

import { SearchBar, VideoDetail, VideoList, SongLyrics } from "../widgets";

const Landing = ({ selectedVideo }) => {
  return (
    <div className="row parent">
      <div className="col s12">
        <SearchBar />
      </div>
      <div className="col s8">
        <div style={{ flexDirection: "column" }}>
          <VideoDetail />

          <SongLyrics />
        </div>
      </div>
      {/*<div className="col s4">
        
        <VideoList />
  </div>*/}
      <div className={selectedVideo === null ? "col s12" : "col s4"}>
        <VideoList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, null)(Landing);
