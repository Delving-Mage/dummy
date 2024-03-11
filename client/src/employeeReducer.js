import { EMPLOYEE_ID } from "./constants/userDetailsContexts";

const defaultData = {
  employeeId: "1",
  employeeName: "defaultName",
};

const EmployeeReducer = (initData = defaultData, actionArg) => {
  if (actionArg.type === "EMPLOYEE_ID") {
    return { ...initData, employeeId: actionArg.payload };
  } else if (actionArg.type === "EMPLOYEE_NAME") {
    return { ...initData, employeeName: actionArg.payload };
  }

  return defaultData;
};

export default EmployeeReducer;
