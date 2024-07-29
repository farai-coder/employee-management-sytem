import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom";

function EditNotification() {
  const [notificationData, setNotificationData] = useState({
    employee: '',
    message: '',
    date_sent: null,
  });

  const params = useParams();
  const id = params.id

  useEffect(() => {
    const fetchNotificationData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/playground/notifications/${id}/`);
        setNotificationData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotificationData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotificationData({ ...notificationData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("notification form", notificationData)
    axios.put(`http://localhost:8000/playground/notifications/${id}/update/`, notificationData)
      .then((response) => {
        console.log(response);
        alert('Notification data updated successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error updating notification data');
      });
  };
  

  return (
    <div className="container d-flex justify-content-center">
      <Link to={`/notifications/`} className="action-link">
            <FaArrowLeft className='text-secondary'/>   
        </Link>
      <Form style={{ width: '40%', padding: '20px', fontSize: '10px' }}>
        <Form.Group controlId="employee">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={notificationData.employee.name}
            name="employee"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={notificationData.message}
            name="message"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="date_sent">
          <Form.Label>Date Sent</Form.Label>
          <Form.Control
            type="date"
            value={notificationData.date_sent}
            name="date_sent"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Link to={`/notifications`} className="action-link">
          <Button variant="secondary" type="submit" className='p-1 m-3' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default EditNotification;