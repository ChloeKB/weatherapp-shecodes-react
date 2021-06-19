import React, { useState } from "react";
import "./Search.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Search() {
  const [city, searchedCity] = useState(props.defaultCity);
  function submitSearch(event) {
    event.preventDefault();
    // search for a city here - we need to access what the user searches for
    
  }
  function cityChange(event) {
    
  }
  return (
    <div className="searchForm">
      <form id="city-form" onSubmit={submitSearch}>
        <input
          type="search"
          placeholder="Type your city"
          autofocus="on"
          autocomplete="off"
          id="search-text-input"
          onChange ={cityChange}
        />
        <button id="submit-button">Search</button>
      </form>
    </div>
  );
}
