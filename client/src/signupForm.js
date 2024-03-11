import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const SignUpForm=()=>{

    const data = useSelector((e)=>e.userdetails)
    console.log(data,'reducer data');

    const {firstName, lastName} =useSelector((e)=>e.userdetails)
    console.log(firstName,'fna')

    const dispatch = useDispatch()

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")

    const handleForm=()=>{
        console.log("entered in")
        dispatch({type:'FIRST_NAME',payload:fname})
        dispatch({type:"LAST_NAME",payload:lname})
        setFlag(true)
    }

    const [flag, setFlag] = useState(false)
    return(<>
    <label>
        fname
    </label>
    <input value={fname} onChange={(e=>setfname(e.target.value))} type={"text"}></input>
    <label>
        lname
    </label>
    <input  value={lname} onChange={(e=>setlname(e.target.value))} type={"text"} ></input>
    <label>
        mobile number
    </label>
    <input type={"number"}></input>
    <label>
        address
    </label>
    <input type={"text"}></input>
    <button onClick={()=>handleForm()}>Submit</button>
    {flag && <><div>{firstName}</div>
    <div>{lastName}</div></>}
    </>)
}

export default SignUpForm;