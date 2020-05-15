import React from "react";
import { SearchBar, VideoDetail, VideoList, SongLyrics } from "../widgets";

const Landing = () => {
  return (
    <div className="row" style={{}}>
      <div className="col s12">
        <SearchBar />
      </div>
      <div className="col s8">
        <div style={{ flexDirection: "column" }}>
          <VideoDetail />
          <SongLyrics />
        </div>
      </div>
      <div className="col s4">
        <VideoList />
      </div>
    </div>
  );
};

export default Landing;
