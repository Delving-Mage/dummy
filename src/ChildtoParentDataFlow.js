import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ParentFunction=()=>{
    const [text,setText] = useState("----")

    const changeTextFunction=(data)=>{
        setText(data)
    }
    const location = useLocation();
    console.log(location.state,'loc');

    return(
        <div>
            <p>Parent Component</p>
            <p>{text}</p>
           < ChildFunction updateParentProp={changeTextFunction} setText={setText}/>
        </div>
    )
}

const ChildFunction=({updateParentProp,setText})=>{
    const [childText, setChildText]=useState("")

    const sendDataToParent=()=>{
        console.log("entered in")
        updateParentProp(childText)
    }

    const changeHandler=(e)=>{
        setChildText(e.target.value)
    }

    console.log(childText,'tex')
    return(
        <div>
            Child Component
            <input type="text" value={childText} onChange={changeHandler}></input>
            <button onClick={sendDataToParent}>Send Data to PARENT</button>
        </div>
    )
}
export default ParentFunction;

