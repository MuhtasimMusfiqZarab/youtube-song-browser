import React from "react";
import { FixedSizeList as List } from "react-window";
import { connect } from "react-redux";

import VideoItem from "./VideoItem";
import HorizontalLine from "./HorizontalLine";
// import HorizontalListItem from "./HorizontalListItem";

const VideoList = ({ searchedVideos, scrollToTop }) => {
  //no videos found
  if (searchedVideos === null) {
    return <div></div>;
  }

  const Row = ({ index, style }) => (
    <div style={style}>
      <VideoItem videoItem={searchedVideos[index]} scrollToTop={scrollToTop} />
    </div>
  );

  //if no videos found
  if (searchedVideos.length === 0) {
    return (
      <h6
        style={{
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        No Videos Found!
      </h6>
    );
  }

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
  };
};

export default connect(mapStateToProps, null)(VideoList);
