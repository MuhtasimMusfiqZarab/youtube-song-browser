import React from "react";
import { connect } from "react-redux";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, selectedVideo }) => {
  //no videos found
  if (videos === null) {
    return <div></div>;
  }
  //else
  if (selectedVideo !== null) {
    console.log("Selected video", selectedVideo.id.videoId);
  }

  //filter

  return (
    <div>
      {videos.map((videoItem, index) =>
        index !== 0 ? (
          <VideoItem key={videoItem.id.videoId} videoItem={videoItem} />
        ) : (
          <div key={1}></div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.searchedVideos,
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, null)(VideoList);