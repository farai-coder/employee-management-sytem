import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom";

function EditLeave() {
  const [leaveData, setLeaveData] = useState({
    employee: '',
    start_date: null,
    end_date: null,
    status: '',
    date_applied: null,
    date_approved: null,
  });

  const params = useParams();
  const id = params.id

  useEffect(() => {
    const fetchLeaveData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/playground/leaves/${id}/`);
        setLeaveData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeaveData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLeaveData({ ...leaveData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("leave form", leaveData)
    axios.put(`http://localhost:8000/playground/leaves/${id}/update/`, leaveData)
      .then((response) => {
        console.log(response);
        alert('Leave data updated successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error updating leave data');
      });
  };
  

  return (
    <div className="container d-flex justify-content-center">
      <Link to={`/leaves/`} className="action-link">
            <FaArrowLeft className='text-secondary'/>   
        </Link>
      <Form style={{ width: '40%', padding: '20px', fontSize: '10px' }}>
        <Form.Group controlId="employee">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={leaveData.employee.name}
            name="employee"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="start_date">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={leaveData.start_date}
            name="start_date"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="end_date">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            value={leaveData.end_date}
            name="end_date"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={leaveData.status}
            name="status"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="date_applied">
          <Form.Label>Date Applied</Form.Label>
          <Form.Control
            type="date"
            value={leaveData.date_applied}
            name="date_applied"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="date_approved">
          <Form.Label>Date Approved</Form.Label>
          <Form.Control
            type="date"
            value={leaveData.date_approved}
            name="date_approved"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Link to={`/leaves`} className="action-link">
          <Button variant="secondary" type="submit" className='p-1 m-3' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default EditLeave;