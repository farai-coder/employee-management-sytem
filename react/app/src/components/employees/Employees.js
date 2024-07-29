import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import EmployeeSearchBar from "./EmployeeSearchBar";

function Employees() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [searchParameter, setSearchParameter] = useState("");
  const [FormData, setFormData] = useState({
    name: "",
    job_title: "",
    department: "",
    contact_info: "",
    date_joined: "",
  });

  async function loadEmployees() {
    axios
      .get("http://localhost:8000/playground/employees/")
      .then((response) => {
        setEmployees(response.data);
      });
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleSearchInputChange = (newSearchParameter) => {
    setSearchParameter(newSearchParameter);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);
  const indexOfLastEmplyee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmplyee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmplyee);

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

  const filteredEmployees = employees.filter((employee) => {
    const name = employee.name.toLowerCase();
    const job_title = employee.job_title.toLowerCase();
    const department = employee.department.toLowerCase();
    const contact_info = employee.contact_info.toLowerCase();
    const date_joined = employee.date_joined.toString();
    const searchQuery = searchParameter.toLowerCase();

    return (
      name.includes(searchQuery) ||
      job_title.includes(searchQuery) ||
      department.includes(searchQuery) ||
      contact_info.includes(searchQuery) ||
      date_joined.includes(searchQuery)
    );
  });

  return (
    <div className="container">
      <EmployeeSearchBar onSearchInputChange={handleSearchInputChange} />
      <section className="mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {filteredEmployees.map((employee, index) => (
            <div key={employee.id} className="card h-400 m-4 p-4 border shadow-lg">
              <h5 className="fw-bold">{employee.name}</h5>
              <p className="mt-3">
                <strong className="fw-bold text-secondary">Job Title:</strong>{" "}
                {employee.job_title}
              </p>
              <p className="mt-2 mb-1">
                <strong className="fw-bold text-secondary">Department:</strong>{" "}
                {employee.department}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Contact Info:</strong>{" "}
                {employee.contact_info}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Date Joined:</strong>{" "}
                {employee.date_joined}
              </p>
              <div className="card-actions">
                <Link to={`/employeeDetails/${employee.id}`} className="action-link">
                  <button type="button" class="btn btn-secondary m-2">
                    View
                  </button>
                </Link>
                <Link to={`/update_employee/${employee.id}`} className="action-link">
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
            {Array(Math.ceil(employees.length / employeesPerPage))
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

export default Employees;