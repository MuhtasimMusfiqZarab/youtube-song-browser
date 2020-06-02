import React, { useState } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

//import svg icon
import PlayIcon from "../../assets/images/play.svg";

const VideoItem = ({
  videoItem,
  getSelectedVideo,
  selectedVideo,
  scrollToTop,
}) => {
  const { title, channelTitle, thumbnails } = videoItem.snippet;
  //if the item is hovered
  const [hover, setHover] = useState(false);

  //helper fucntion to get the clicked video along with the lyrics
  const onVideoClick = () => {
    //get the video
    getSelectedVideo(videoItem);
    //scroll to the media player
    scrollToTop();
  };

  //check if this video is currently playing (change background style)
  const currentlyPlaying = () => {
    if (selectedVideo !== null) {
      if (videoItem.id.videoId === selectedVideo.id.videoId) return true;
      return false;
    }
    return false;
  };
  //no videos
  if (videoItem === null) return <div />;
  //else
  return (
    <div
      className="card horizontal"
      style={
        hover
          ? {
              height: "94px",
              boxShadow: "none",
              cursor: "pointer",
              backgroundColor: "#e0e0e0 ",
            }
          : { height: "94px", boxShadow: "none" }
      }
      onClick={onVideoClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="card-image">
        <img
          src={`${thumbnails.medium.url}`}
          style={{ height: "100%" }}
          alt="thumbnail"
        />
      </div>
      <div
        className="card-content"
        style={{ padding: "0px", marginLeft: "10px", marginRight: "10px" }}
      >
        <div
          style={{
            marginBottom: 4,
            //extra
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "1.6rem",
            //to cup after this line
          }}
        >
          {title.length > 40 ? title.substring(0, 40) + " ..." : title}
        </div>

        <h6
          style={{
            marginTop: "0px",
            marginBottom: 5,
            color: "#606060",
            fontSize: "13px",
          }}
        >
          {channelTitle}
        </h6>
        {currentlyPlaying() && (
          <img
            src={PlayIcon}
            alt="Play Icon"
            style={{ width: "10px", height: "auto" }}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, actions)(VideoItem);
