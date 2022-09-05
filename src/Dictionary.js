import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary (props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults]= useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse (response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001a22a6750eb3a421095ba25e04f37d547";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`}
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
  }

  function handleSubmit (event) {
    event.preventDefault();
    search();
  }
  
  function handleKeywordChange (event) {
    setKeyword(event.target.value);
  }

  function load () {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
            <h2>Look up a word:</h2>
            <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
          </form>
          <div className="hint">
            suggested words: sunset, forest, smile
          </div>
        </section>
        <Results results={results}/>
        <Photos photos={photos}/>
      </div>
    )
  } else {
    load();
    return "Loading...";
  }
}