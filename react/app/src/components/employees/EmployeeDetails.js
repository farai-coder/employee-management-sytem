import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function EmployeeDetails() {
  const [employee, setEmployee] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!isDataFetched) {
      axios.get(`http://localhost:8000/playground/employees/${id}/`)
        .then(response => {
          setEmployee(response.data);
          setIsDataFetched(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  console.log("employee info", employee);

  return (
    <div className="Modal p-5" tabindex="-1">
      <div className="Modal-dialog ml-5" style={{ maxWidth: '90%', maxHeight: '90vh' }}>
        <div className="Modal-content p-5"  style={{ border: 'none', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}>
          <div className="Modal-header d-flex justify-content-end" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to={`/employees`} className="action-link">
              <button type="button" class="btn-close" data-bs-dismiss="Modal" aria-label="Close" style={{ fontSize: '20px', cursor: 'pointer' }}></button>
            </Link>
          </div>
          <div className="Modal-body">
            <h1 className='fw-bold fs-10'>Employee Information</h1>
            <div className="row">
              <div className="col">
                <p className='p-2 text-secondary'><strong className='fw-bold'>Employee Name: </strong>{employee.name}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>Job Title: </strong>{employee.job_title}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>Department: </strong>{employee.department}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>Contact Info: </strong>{employee.contact_info}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>Date Joined: </strong>{employee.date_joined}</p>
              </div>
              <div className="col">
                <p className='p-2 text-secondary'><strong className='fw-bold'>Employee ID: </strong>{employee.employee_id}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>National Id: </strong>{employee.national_id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;