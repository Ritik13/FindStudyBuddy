import React, { useState } from "react";

export default function Detail(props) {

  const sideSearch = {
    outline: 'none'
  }
  const btnSearch = {
    border: 'none',
    padding: '0px',
    backgroundColor: 'white',
    color: 'black',
  }

  return (
    <div className="container sidebar-container">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <span>
            <input
              style={sideSearch}
              className="side-search"
              type="search"
              id="searchFor"
              placeholder="Tags"
              aria-label="Search"
            />
            <button type="button" name="searchFor" className="btn btn-primary searchBtn" style={btnSearch} onClick={props.filterByCus}>
              <i className="fas fa-search"></i>
            </button>
          </span>
        </form>
      </nav>
    </div>
  );
}
