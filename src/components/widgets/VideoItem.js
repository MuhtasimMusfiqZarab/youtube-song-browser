import React from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

const VideoItem = ({ video, getSelectedVideo }) => {
  const { title, channelTitle, thumbnails } = video.snippet;
  console.log(thumbnails.medium.url);

  //no videos
  if (video === null) return <div>Loading...</div>;
  //else
  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div
      className="card horizontal"
      style={{ height: "94px" }}
      onClick={() => getSelectedVideo(video)}
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

export default connect(null, actions)(VideoItem);
