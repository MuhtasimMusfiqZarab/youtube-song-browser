import React from "react";
import { connect } from "react-redux";

const VideoList = () => {
  return (
    <div>
      <p>This is video list</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.searchedVideos,
  };
};

export default connect(mapStateToProps, null)(VideoList);
