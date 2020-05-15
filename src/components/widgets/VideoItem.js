import React from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

const VideoItem = ({
  videoItem,
  getSelectedVideo,
  getLyrics,
  searchedTerm,
}) => {
  const { title, channelTitle, thumbnails } = videoItem.snippet;
  const { artist, songTitle } = searchedTerm;

  //helper fucntion to get the clicked video along with the lyrics
  const onVideoClick = () => {
    //get the video
    getSelectedVideo(videoItem);
    //get the lyrics
    getLyrics(artist, songTitle);
  };

  //no videos
  if (videoItem === null) return <div />;
  //else
  return (
    <div
      className="card horizontal"
      style={{ height: "94px", boxShadow: "none" }}
      onClick={onVideoClick}
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
          }}
        >
          {title}
        </div>

        <h6
          style={{
            marginTop: "0px",
            marginBottom: 10,
            color: "#606060",
            fontSize: "13px",
          }}
        >
          {channelTitle}
        </h6>
      </div>
    </div>
  );
};

//get the artist & songtitle for lyrics
const mapStateToProps = (state) => {
  return {
    searchedTerm: state.searchedTerm,
  };
};

export default connect(mapStateToProps, actions)(VideoItem);
