import React from "react";
//connect helper
import { connect } from "react-redux";
import HorizontalLine from "./HorizontalLine";

const VidoeDetail = ({ selectedVideo }) => {
  //no videos
  if (selectedVideo === null) return <div />;
  //else

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <div className="card" style={{ boxShadow: "none" }}>
        <div className="card-image">
          <iframe
            frameBorder="0"
            height="466px"
            width="100%"
            title="Video Player"
            src={videoSrc}
            allow="autoplay; fullscreen"
          />
          {/*<span className="card-title">Card Title</span>*/}
        </div>
        <div className="card-content" style={{ padding: "10px" }}>
          <blockquote>
            <h5 style={{ marginTop: 10, marginBottom: 10 }}>
              {selectedVideo.snippet.title}
            </h5>
          </blockquote>
          <h6 style={{ marginTop: 10, marginBottom: 10, color: "red" }}>
            {selectedVideo.snippet.channelTitle}
          </h6>
          <h6 style={{ marginTop: 10, marginBottom: 10 }}>
            {selectedVideo.snippet.description}
          </h6>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, null)(VidoeDetail);
