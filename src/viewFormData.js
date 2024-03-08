// const ViewFormData=(props)=>{
//     console.log(props,'properties')
//     return(
//         <>
//         <p>FORM DATA SUBMITTED</p>
//         {props.name}
//         </>
//     )
// }
const ViewFormData=({name,updateName})=>{
    // console.log(updateName, 'update Function');
    return(
        <>
        <p>FORM DATA SUBMITTED</p>
        <button onClick={()=>updateName("besant")}>Update Data</button>
        {name}
        </>
    )
}

export default ViewFormData;