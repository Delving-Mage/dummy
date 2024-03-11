import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const LoginPage = () => {
  const navigate = useNavigate();

  // const [username, setUserName] = useState();

  const {employeeId,employeeName} = useSelector((e)=>e)

  console.log(employeeId,'___',employeeName);

  const dispatch = useDispatch()

const handleForm=()=>{
  return employeeId==null && employeeName==null?alert("Please fill out the form fields"):alert("submitted succesfully")
}
 
  return (
    <>

      <label>
        employyeID
        <input
          value={employeeId}
          onChange={(e) => dispatch({type:"EMPLOYEE_ID",payload:e.target.value})
        }
          type={"text"}
        ></input>
      </label>
      <label>
        employeeName
        <input value={employeeName} onChange={(e)=>dispatch({type:"EMPLOYEE_NAME",payload:e.target.value})} type={"text"}></input>
      </label>
      <button onClick={handleForm}>Login</button>
    </>
  );
};

export default LoginPage;
