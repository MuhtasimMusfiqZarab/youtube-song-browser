import React, { useState, useEffect } from "react";
//connect helper
import { connect } from "react-redux";
//import actions
import * as actions from "../../actions";

const SearchBar = ({
  fetchTrendingVideos,
  fetchVideos,
  searchedTerm,
  saveSearchedTerm,
  getLyrics,
  clearSavedLyrics,
}) => {
  const [artist, setArtist] = useState("");
  const [songTitle, setTitle] = useState("");

  //feching trendingVideos on initial load
  useEffect(() => {
    fetchTrendingVideos();
  }, [fetchTrendingVideos]);

  //check if previous search is same as the new one
  const sameSearchAsPrevious = (newSearchTerm) => {
    //no previous search or no new search
    if (newSearchTerm === undefined || searchedTerm === null) return false;

    // Create arrays of property names
    let aProps = Object.getOwnPropertyNames(searchedTerm);
    let bProps = Object.getOwnPropertyNames(newSearchTerm);

    //number of properties is different,
    if (aProps.length !== bProps.length) {
      return false;
    }

    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i];
      //values of same property are not equal,
      if (searchedTerm[propName] !== newSearchTerm[propName]) {
        return false;
      }
    }
    return true;
  };

  //seach form submission
  const onSubmit = (e) => {
    e.preventDefault();

    //if two consicutive seares are the same
    const sameSearch = sameSearchAsPrevious({ artist, songTitle }); //newSearchTerm as arg
    //clear the previous session if searches are different
    if (!sameSearch) {
      clearSavedLyrics();
    }

    //if there is no value for artist or song title then do nothing
    if (artist === "" && songTitle === "" && sameSearch) return;

    //store artist & song title in redux
    saveSearchedTerm(artist, songTitle);
    //concatinating keywords to send for the search
    let artistKeyword = artist.replace(" ", "+");
    let songTitleKeyword = songTitle.replace(" ", "+");
    let searchTerm = artistKeyword.concat("+", songTitleKeyword);
    //searchTerm inscludes both the artist and the song title
    fetchVideos(searchTerm);
    //fetch the lyrics
    getLyrics(artist, songTitle);
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
          className="btn col s2 input-field"
          type="submit"
          name="action"
          style={{ fontSize: "12px" }}
          onClick={(e) => onSubmit(e)}
        >
          Search
          {/*<i className="material-icons right">send</i>*/}
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    searchedTerm: state.searchedTerm,
  };
};

export default connect(mapStateToProps, actions)(SearchBar);
