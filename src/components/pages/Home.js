import React, { useRef } from "react";
import { connect } from "react-redux";

import { SearchBar, VideoDetail, VideoList, SongLyrics } from "../widgets";

const Home = ({ selectedVideo }) => {
  //general scroll element function
  const scrollToRef = (ref) => {
    if (ref.current.offsetTop !== null) {
      window.scrollTo({
        behavior: "smooth",
        top: myRef.current.offsetTop,
      });
    }
  };

  //to scroll when a video is selected , to the media player
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div className="row parent" ref={myRef}>
      <div className="col s12">
        <SearchBar />
      </div>
      <div className="col m8 s12">
        <div style={{ flexDirection: "column" }}>
          <VideoDetail />
          <SongLyrics />
        </div>
      </div>
      <div className={selectedVideo === null ? "col s12" : "col m4 s12"}>
        <VideoList scrollToTop={executeScroll} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps, null)(Home);
