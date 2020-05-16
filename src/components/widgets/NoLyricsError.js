import React from "react";

const NoLyricsError = () => {
  return (
    <div className="card" style={{ textAlign: "center", boxShadow: "none" }}>
      <div
        className="card-content"
        style={{
          whiteSpace: "pre-wrap",
          color: "#b71c1c",
          textAlign: "center",
        }}
      >
        <p>
          You need to provide valid inputs for both the artist name & the song
          title in the seach form field to get the lyrics!
        </p>
      </div>
    </div>
  );
};

export default NoLyricsError;
