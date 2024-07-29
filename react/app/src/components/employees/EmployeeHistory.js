import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import "../App.css"
import axios from "axios"
import { useEffect } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import {useParams} from "react-router-dom"

function EmployeeHistory() {
    const [search, setSearch] = useState("")
    const [employeeHistories, setEmployeeHistories] = useState([])

    const [FormData,setFormData] = useState({
        firstName: "",
        email: ""
    })
    const [isDataFetched, setIsDataFetched] = useState(false);
    const params = useParams()
    const id = params.id

  useEffect(() => {
    if (!isDataFetched) {
      axios.get(`http://localhost:8000/playground/employees/${id}/employee_history/`)
        .then(response => {
          setEmployeeHistories(response.data);
          setIsDataFetched(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);
  console.log("employee histories", employeeHistories)
    
    function handleClick(event) {
        const {name, value} = event.target
        
        setFormData(prevState=>{
            return{
            ...prevState,[name]: value}
        })
        console.log(event)
        console.log(value)
        console.log(FormData)
    }
    function handleChange(event){
        setSearch(event.target.value)
        console.log(search)
    }
    
    return(
        <div className="container">
        <Link to={`/employees/`} className="action-link">
            <FaArrowLeft className="text-secondary"/>   
        </Link>
         
        <section className="mt-3">
            <table className="table table-striped border border-5 table-info table-hover table-sm">
                <thead>
                    <tr>
                        <th>Employee name</th>
                        <th>Company</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Date started</th>
                        <th>Date left</th>
                    </tr>
                </thead>
                <tbody className="">
                    
                        {employeeHistories.map((employeeHistory,index) =>
                        (<tr key={employeeHistory.id} className="justify-content" style={{ height: '10px' }}>
                            {/* <th scope="row" key={index}>
                                {index + 1}
                            </th> */}
                            <td className="">{employeeHistory.name}</td>
                            <td>{employeeHistory.company}</td>
                            <td className="">{employeeHistory.department}</td>
                            <td>{employeeHistory.role}</td>
                            <td>{employeeHistory.dateStarted}</td>
                            <td>{employeeHistory.dateLeft}</td>
                         
                        </tr>))}
                </tbody>
            </table>
        </section>
        </div>
    )
}

export default EmployeeHistory;