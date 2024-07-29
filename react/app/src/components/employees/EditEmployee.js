import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from "react-router-dom";

function EditEmployee() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    job_title: '',
    department: '',
    contact_info: '',
    date_joined: null,
  });

  const params = useParams();
  const id = params.id

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/playground/employees/${id}/`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployeeData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("employee form", employeeData)
    axios.put(`http://localhost:8000/playground/employees/${id}/update/`, employeeData)
      .then((response) => {
        console.log(response);
        alert('Employee data updated successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error updating employee data');
      });
  };
  

  return (
    <div className="container d-flex justify-content-center">
      <Link to={`/employees/`} className="action-link">
            <FaArrowLeft className='text-secondary'/>   
        </Link>
      <Form style={{ width: '40%', padding: '20px', fontSize: '10px' }}>
        <Form.Group controlId="name">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={employeeData.name}
            name="name"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="job_title">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={employeeData.job_title}
            name="job_title"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="department">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={employeeData.department}
            name="department"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="contact_info">
          <Form.Label>Contact Info</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={employeeData.contact_info}
            name="contact_info"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Form.Group controlId="date_joined">
          <Form.Label>Date Joined</Form.Label>
          <Form.Control
            type="date"
            value={employeeData.date_joined}
            name="date_joined"
            onChange={handleChange}
            className='shadow-lg'
          />
        </Form.Group>

        <Link to={`/employees`} className="action-link">
          <Button variant="secondary" type="submit" className='p-1 m-3' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default EditEmployee;