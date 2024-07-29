
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import LeaveSearchBar from "./LeaveSearchBar";

export default function Leaves() {
  const [leaves, setLeaves] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParameter, setSearchParameter] = useState("");
  const [FormData, setFormData] = useState({
    employee: "",
    start_date: "",
    end_date: "",
    status: "",
    date_applied: "",
    date_approved: "",
  });

  async function loadLeaves() {
    axios
      .get("http://localhost:8000/playground/leaves/")
      .then((response) => {
        setLeaves(response.data);
      });
  }

  useEffect(() => {
    loadLeaves();
  }, []);

  console.log("leaves", leaves);

  const handleSearchInputChange = (newSearchParameter) => {
    setSearchParameter(newSearchParameter);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [leavesPerPage] = useState(2);
  const indexOfLastLeave = currentPage * leavesPerPage;
  const indexOfFirstLeave = indexOfLastLeave - leavesPerPage;
  const currentLeaves = leaves.slice(indexOfFirstLeave, indexOfLastLeave);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChang = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  function handleClick(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const filteredLeaves = leaves.filter((leave) => {
    console.log("leave", leave);
    // const employee = leave.employee.name.toLowerCase();
    // console.log("name",employee)
    const start_date = leave.start_date.toString();
    const end_date = leave.end_date.toString();
    const status = leave.status.toLowerCase();
    const date_applied = leave.date_applied.toString();
    const date_approved = leave.date_approved ? leave.date_approved.toString() : "";
    const searchQuery = searchParameter.toLowerCase();

    return (
      // employee.includes(searchQuery) ||
      start_date.includes(searchQuery) ||
      end_date.includes(searchQuery) ||
      status.includes(searchQuery) ||
      date_applied.includes(searchQuery) ||
      date_approved.includes(searchQuery)
    );
  });

  return (
    <div className="container">
      <LeaveSearchBar onSearchInputChange={handleSearchInputChange} />
      <section className="mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {filteredLeaves.map((leave, index) => (
            <div key={leave.id} className="card h-400 m-4 p-4 border shadow-lg">
              <h5 className="fw-bold">{leave.employee.name}</h5>
              <p className="mt-3">
                <strong className="fw-bold text-secondary">Start Date:</strong>{" "}
                {leave.start_date}
              </p>
              <p className="mt-2 mb-1">
                <strong className="fw-bold text-secondary">End Date:</strong>{" "}
                {leave.end_date}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Status:</strong>{" "}
                {leave.status}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Date Applied:</strong>{" "}
                {leave.date_applied}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Date Approved:</strong>{" "}
                {leave.date_approved ? leave.date_approved : "Not Approved"}
              </p>
              <div className="card-actions">
                <Link to={`/leaves/${leave.id}`} className="action-link">
                  <button type="button" class="btn btn-secondary m-2">
                    View
                  </button>
                </Link>
                <Link to={`/update_leave/${leave.id}`} className="action-link">
                  <button type="button" class="btn btn-secondary m-2">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            {Array(Math.ceil(leaves.length / leavesPerPage))
              .fill()
              .map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </section>
    </div>
  );
}
