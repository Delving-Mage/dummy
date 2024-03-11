import Demo from "./ChildComponentRender";
import { useState } from 'react';

const Rendering=()=>{
    const [count, setCount]= useState(0)
    console.log("rendered parent component")
    return(
        <>
        count:{count}
        <br/>
        Parent Component
        <button onClick={()=>setCount(count+1)}>Trigger</button>
        <br/>
        <Demo.ChildComponentRender />
        </>
    )
}

export default Rendering;