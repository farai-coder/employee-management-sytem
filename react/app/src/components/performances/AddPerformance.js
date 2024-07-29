import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

export default function AddPerformance() {
  const [performanceData, setPerformanceData] = useState({
    employee: '',
    hours_worked: null,
    tasks_completed: null,
    performance_score: null,
    date_recorded: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerformanceData({ ...performanceData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('performance form', performanceData);
    axios.post('http://localhost:8000/playground/performances/create/', performanceData)
      .then((response) => {
        console.log(response);
        alert('Performance data saved successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error saving performance data');
      });
  };

  return (
    <div className="container d-flex justify-content-center">
      <Link to={`/performances/`} className="action-link">
        <FaArrowLeft className='text-secondary'/>   
      </Link>
      <Form style={{ width: '40%', padding: '20px', fontSize: '10px' }}>
        <Form.Group controlId="employee">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={performanceData.employee}
            name="employee"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="hours_worked">
          <Form.Label>Hours Worked</Form.Label>
          <Form.Control
            type="number"
            value={performanceData.hours_worked}
            name="hours_worked"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="tasks_completed">
          <Form.Label>Tasks Completed</Form.Label>
          <Form.Control
            type="number"
            value={performanceData.tasks_completed}
            name="tasks_completed"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="performance_score">
          <Form.Label>Performance Score</Form.Label>
          <Form.Control
            type="number"
            value={performanceData.performance_score}
            name="performance_score"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="date_recorded">
          <Form.Label>Date Recorded</Form.Label>
          <Form.Control
            type="date"
            value={performanceData.date_recorded}
            name="date_recorded"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Link to={`/performances`} className="action-link">
          <Button variant="secondary" type="submit" className='p-1 m-3' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Link>
      </Form>
    </div>
  );
}