import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import NotificationSearchBar from "./NotificationSearchBar";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParameter, setSearchParameter] = useState("");
  const [FormData, setFormData] = useState({
    employee: "",
    message: "",
    date_sent: "",
  });

  async function loadNotifications() {
    axios
      .get("http://localhost:8000/playground/notifications/")
      .then((response) => {
        setNotifications(response.data);
      });
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  console.log("notifications", notifications);

  const handleSearchInputChange = (newSearchParameter) => {
    setSearchParameter(newSearchParameter);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [notificationsPerPage] = useState(2);
  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);

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

  const filteredNotifications = notifications.filter((notification) => {
    console.log("notification", notification);
    // const employee = notification.employee.name.toLowerCase();
    const message = notification.message.toLowerCase();
    const date_sent = notification.date_sent.toString();
    const searchQuery = searchParameter.toLowerCase();

    return (
      // employee.includes(searchQuery) ||
      message.includes(searchQuery) ||
      date_sent.includes(searchQuery)
    );
  });

  return (
    <div className="container">
      <NotificationSearchBar onSearchInputChange={handleSearchInputChange} />
      <section className="mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {filteredNotifications.map((notification, index) => (
            <div key={notification.id} className="card h-400 m-4 p-4 border shadow-lg">
              <h5 className="fw-bold">{notification.employee.name}</h5>
              <p className="mt-3">
                <strong className="fw-bold text-secondary">Message:</strong>{" "}
                {notification.message}
              </p>
              <p className="mb-2">
                <strong className="fw-bold text-secondary">Date Sent:</strong>{" "}
                {notification.date_sent}
              </p>
              <div className="card-actions">
                <Link to={`/notifications/${notification.id}`} className="action-link">
                  <button type="button" class="btn btn-secondary m-2">
                    View
                  </button>
                </Link>
                <Link to={`/update_notification/${notification.id}`} className="action-link">
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
            {Array(Math.ceil(notifications.length / notificationsPerPage))
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