import { useState } from "react";
import { useLocation } from 'react-router-dom';

const EmployeeDetails = () => {
  const location = useLocation()
  console.log(location,'locationData')
   
 location.state.fields.firstName ="google";
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>mobilenum</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{location.state?.fields?.firstName}</td>
            <td>{location.state?.fields?.lastname}</td>
            <td>{location.state?.fields?.mobilenum}</td>
            <td>{location.state?.fields?.address}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EmployeeDetails;
