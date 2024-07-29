import React from 'react';
import {Link} from "react-router-dom"
import { useState } from 'react';

function LeaveSearchBar({ onSearchInputChange }) {
  const [searchInput, setSearchInput] = useState(""); 

  const handleSearchInputChange = (event) => {
    const newSearchParameter = event.target.value;
    setSearchInput(newSearchParameter); 
    onSearchInputChange(newSearchParameter);
  };
  return (
    <div className="container">

      <div className="row">
        <div className="col-9">
          <div className="input-group">
            <input
              className="form-control border-secondary py-2 shadow-lg"
              type="search"
              placeholder="Search leave by employee name, start date, end date, status, etc."
              onChange={handleSearchInputChange}
              value={searchInput} 
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary p-1 shadow-lg" type="button" style={{ height: '34px' ,width: '50', borderRadius: '1px'}}>
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="input-group-append ms-5">
            
              <Link to={`/add_leave`} className="action-link">
              <button className="btn btn-outline-secondary p-1 shadow-lg mt-2" type="button">
                <i className="">Add leave</i>
              </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveSearchBar;