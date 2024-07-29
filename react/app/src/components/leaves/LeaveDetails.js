import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function LeaveDetails() {
  const [leave, setLeave] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!isDataFetched) {
      axios.get(`http://localhost:8000/playground/leaves/${id}/`)
        .then(response => {
          setLeave(response.data);
          setIsDataFetched(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  console.log("leave info", leave);

  return (
    <div className="Modal p-5" tabindex="-1">
      <div className="Modal-dialog ml-5" style={{ maxWidth: '90%', maxHeight: '90vh' }}>
        <div className="Modal-content p-5"  style={{ border: 'none', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}>
          <div className="Modal-header d-flex justify-content-end" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to={`/leaves`} className="action-link">
              <button type="button" class="btn-close" data-bs-dismiss="Modal" aria-label="Close" style={{ fontSize: '20px', cursor: 'pointer' }}></button>
            </Link>
          </div>
          <div className="Modal-body">
            <h1 className='fw-bold fs-10'>Leave Information</h1>
            <div className="row">
              <div className="col">
                {/* <p className='p-2 text-secondary'><strong className='fw-bold'>Employee Name: </strong>{leave.employee.name}</p> */}
                <p className='p-2 text-secondary'><strong className='fw-bold'>Start Date: </strong>{leave.start_date}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>End Date: </strong>{leave.end_date}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>Status: </strong>{leave.status}</p>
              </div>
              <div className="col">
                <p className='p-2 text-secondary'><strong className='fw-bold'>Date Applied: </strong>{leave.date_applied}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>Date Approved: </strong>{leave.date_approved ? leave.date_approved : "Not Approved"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveDetails;