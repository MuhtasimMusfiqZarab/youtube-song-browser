import React, { useState } from "react";
//connect helper
import { connect } from "react-redux";
//import actions
import * as actions from "../../actions";

const SearchBar = ({ fetchVideos, saveSearchedTerm }) => {
  const [artist, setArtist] = useState("");
  const [songTitle, setTitle] = useState("");

  //seach form submission
  const onSubmit = (e) => {
    e.preventDefault();
    //store artist & song title in redux
    saveSearchedTerm(artist, songTitle);
    //concatinating keywords to send for the search
    let artistKeyword = artist.replace(" ", "+");
    let songTitleKeyword = songTitle.replace(" ", "+");
    let searchTerm = artistKeyword.concat("+", songTitleKeyword);
    //searchTerm inscludes both the artist and the song title
    fetchVideos(searchTerm);
  };

  return (
    <form style={{ marginTop: "10px" }}>
      <div className="row">
        <div className="input-field col s5">
          <input
            id="artist"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="validate"
          />
          <label htmlFor="artist">Artist</label>
        </div>
        <div className="input-field col s5">
          <input
            id="song_title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={songTitle}
            className="validate"
          />
          <label htmlFor="song_title">Song Title</label>
        </div>

        <button
          className="btn waves-effect waves-light col s2 input-field"
          type="submit"
          name="action"
          onClick={(e) => onSubmit(e)}
        >
          Search
          {/*<i className="material-icons right">send</i>*/}
        </button>
      </div>
    </form>
  );
};

export default connect(null, actions)(SearchBar);
