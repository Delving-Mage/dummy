import { useRef, useState } from 'react';
import { useEffect } from 'react';
const Ref=()=>{

const [name,setName]=useState("")
// const [renderCount,setRenderCount] =useState(0)
const reference = useRef()
console.log(reference,'ref');

// const focus=()=>{
//     reference.current.click()
// }
function focus(){
    reference.current.click()
}
    return(
        <>
        <input type="file" ref={reference}  value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>focus()}>Focus</button>
        <div>My name is {name}</div>
        <div>UI Rendered {reference.current}</div>
        </>
    )
}

export default Ref;