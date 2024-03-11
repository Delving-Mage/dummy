import { combineReducers} from "redux"
import UserDetails from './reducer';
import { legacy_createStore } from 'redux'
import EmployeeReducer from "./employeeReducer";


const StoreReducerFile = legacy_createStore(
  EmployeeReducer,
    )

export default StoreReducerFile;