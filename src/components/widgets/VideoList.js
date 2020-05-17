import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import { connect } from "react-redux";

import VideoItem from "./VideoItem";
import HorizontalLine from "./HorizontalLine";
// import HorizontalListItem from "./HorizontalListItem";

const VideoList = ({ selectedVideo, searchedVideos, trendingVideos }) => {
  //no videos found
  if (searchedVideos === null) {
    return <div></div>;
  }

  const Row = ({ index, style }) => (
    <div style={style}>
      <VideoItem videoItem={searchedVideos[index]} />
    </div>
  );

  return (
    <div>
      <h6 style={{ textAlign: "center", marginBottom: "15px" }}>
        Search Result
      </h6>
      <HorizontalLine />
      <List
        className="List"
        height={600}
        itemCount={searchedVideos.length}
        itemSize={100}
        width={"100%"}
      >
        {Row}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedVideos: state.searchedVideos,
    selectedVideo: state.selectedVideo,
    trendingVideos: state.trendingVideos,
  };
};

export default connect(mapStateToProps, null)(VideoList);
