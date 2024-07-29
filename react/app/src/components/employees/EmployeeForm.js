import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmployeeForm() {
  return (
    <div className="container d-flex justify-content-center">
    <Form style={{ width: '40%', padding: '20px', fontSize: '10px' }}>
      <Form.Group controlId="employeeName">
        <Form.Label className='3'>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Farai Rato" />
      </Form.Group>

      <Form.Group controlId="employeeId">
        <Form.Label className='mt-3'>Employee ID</Form.Label>
        <Form.Control type="text" placeholder="ABC1234"/>
      </Form.Group>

      <Form.Group controlId="role">
        <Form.Label className='mt-3'>Role</Form.Label>
        <Form.Control type="text" placeholder="database designing" />
      </Form.Group>

      <Form.Group controlId="depatment">
          <Form.Label>Department</Form.Label>
          <Form.Select>
            <option>IT technician</option>
            <option>Admin</option>
            <option>Programmer</option>
            <option>Software Engineer</option>
          </Form.Select>
        </Form.Group>

      <Form.Group controlId="contactPerson">
        <Form.Label className='mt-3'>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="+263 716522473" />
      </Form.Group>
      <Form.Group controlId="dateStarted">
        <Form.Label className='mt-3'>Date Started</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group controlId="dateStarted">
        <Form.Label className='mt-3'>Date left</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group controlId="Duties">
        <Form.Label className='mt-3'>Duties</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter duties" />
      </Form.Group>
      
      <Link to={`/employees`} className="action-link">
        <Button variant="secondary" type="submit " className='p-1 m-3'>
          Save Changes
      </Button>
      </Link>
      
    </Form>
    </div>
  );
}

export default EmployeeForm;
