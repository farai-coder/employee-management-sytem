import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function NotificationDetails() {
  const [notification, setNotification] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!isDataFetched) {
      axios.get(`http://localhost:8000/playground/notifications/${id}/`)
        .then(response => {
          setNotification(response.data);
          setIsDataFetched(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  console.log("notification info", notification);

  return (
    <div className="Modal p-5" tabindex="-1">
      <div className="Modal-dialog ml-5" style={{ maxWidth: '90%', maxHeight: '90vh' }}>
        <div className="Modal-content p-5"  style={{ border: 'none', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}>
          <div className="Modal-header d-flex justify-content-end" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to={`/notifications`} className="action-link">
              <button type="button" class="btn-close" data-bs-dismiss="Modal" aria-label="Close" style={{ fontSize: '20px', cursor: 'pointer' }}></button>
            </Link>
          </div>
          <div className="Modal-body">
            <h1 className='fw-bold fs-10'>Notification Information</h1>
            <div className="row">
              <div className="col">
                {/* <p className='p-2 text-secondary'><strong className='fw-bold'>Employee Name: </strong>{notification.employee.name}</p> */}
                <p className='p-2 text-secondary'><strong className='fw-bold'>Message: </strong>{notification.message}</p>
                <p className='p-2 text-secondary'><strong className='fw-bold'>Date Sent: </strong>{notification.date_sent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationDetails;