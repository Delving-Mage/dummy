import  React  from "react";
import { connect } from "react-redux";
import { EMPLOYEE_ID } from './constants/userDetailsContexts';
class LoginPageClassComponent extends React.Component {
  state = {
    employeeId: "",
    employeeName: "",
  };

  handleForm=()=>{
    const {employeeId, employeeName} = this.state
    console.log(this.props,'props from parent');
   this.props.dispatch({type:EMPLOYEE_ID,payload:employeeId});
   this.props.dispatch({type:"EMPLOYEE_NAME",payload:employeeName})
  }
  render(){
    const {employeeId, employeeName} = this.state

    return(
        <>

      <label>
        employyeID
        <input
          value={employeeId}
          onChange={(e)=>this.setState({employeeId:e.target.value})}
          type={"text"}
        ></input>
      </label>
      <label>
        employeeName
        <input value={employeeName} onChange={(e)=>this.setState({employeeName:e.target.value})} type={"text"}></input>
      </label>
      <button onClick={this.handleForm}>Login</button>
    </>   
    )
  }
}

const mapStateToProps=(state)=>{
console.log(state,'statefrom store');
}

// const mapDispatchToProps=(dispatch)=>{
// return{
// setEmployeeId:(employeeId)=>dispatch({type:EMPLOYEE_ID,payload:employeeId}),
// setEmployeeName:(employeeName)=>dispatch({type:"EMPLOYEE_NAME",payload:employeeName})
// }
// }

export default connect(mapStateToProps)(LoginPageClassComponent); 
