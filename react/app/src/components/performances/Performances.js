import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import PerformanceSearchBar from "./PerformanceSearchBar";

export default function Performances() {
  const [performances, setPerformances] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParameter, setSearchParameter] = useState("");
  const [FormData, setFormData] = useState({
    employee: "",
    hours_worked: "",
    tasks_completed: "",
    performance_score: "",
    date_recorded: "",
  });

  async function loadPerformances() {
    axios
      .get("http://localhost:8000/playground/performances/")
      .then((response) => {
        setPerformances(response.data);
      });
  }

  useEffect(() => {
    loadPerformances();
  }, []);

  console.log("performances", performances);

  const handleSearchInputChange = (newSearchParameter) => {
    setSearchParameter(newSearchParameter);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [performancesPerPage] = useState(2);
  const indexOfLastPerformance = currentPage * performancesPerPage;
  const indexOfFirstPerformance = indexOfLastPerformance - performancesPerPage;
  const currentPerformances = performances.slice(indexOfFirstPerformance, indexOfLastPerformance);

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

  const filteredPerformances = performances.filter((performance) => {
    console.log("performance", performance);
    // const employee = performance.employee.name.toLowerCase();
    const hours_worked = performance.hours_worked.toString();
    const tasks_completed = performance.tasks_completed.toString();
    const performance_score = performance.performance_score.toString();
    const date_recorded = performance.date_recorded.toString();
    const searchQuery = searchParameter.toLowerCase();

    return (
    //   employee.includes(searchQuery) ||
      hours_worked.includes(searchQuery) ||
      tasks_completed.includes(searchQuery) ||
      performance_score.includes(searchQuery) ||
      date_recorded.includes(searchQuery)
    );
  });

  return (
    <div className="container">
      <PerformanceSearchBar onSearchInputChange={handleSearchInputChange} />
      <section className="mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {filteredPerformances.map((performance, index) => (
            <div key={performance.id} className="card h-400 m-4 p-4 border shadow-lg">
              <h5 className="fw-bold">{performance.employee.name}</h5>
              <p className="mt-3">
                <strong className="fw-bold text-secondary">Hours Worked:</strong>{" "}
                {performance.hours_worked}
              </p>
              <p className="mt-2 mb-1">
                <strong className="fw-bold text-secondary">Tasks Completed:</strong>{" "}
                {performance.tasks_completed}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Performance Score:</strong>{" "}
                {performance.performance_score}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Date Recorded:</strong>{" "}
                {performance.date_recorded}
              </p>
              <div className="card-actions">
                <Link to={`/performances/${performance.id}`} className="action-link">
                  <button type="button" class="btn btn-secondary m-2">
                    View
                  </button>
                </Link>
                <Link to={`/update_performance/${performance.id}`} className="action-link">
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
            {Array(Math.ceil(performances.length / performancesPerPage))
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