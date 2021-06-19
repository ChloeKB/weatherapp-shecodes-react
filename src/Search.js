import React from "react";
import "./Search.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Search() {
  return (
    <div className="searchForm">
      <form id="city-form">
        <input
          type="search"
          placeholder="Type your city"
          autofocus="on"
          autocomplete="off"
          id="search-text-input"
        />
        <button id="submit-button">Search</button>
      </form>
    </div>
  );
}
