import { combineReducers} from "redux"
import UserDetails from './reducer';
import { legacy_createStore } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import EmployeeReducer from "./employeeReducer";


const StoreReducerFile = legacy_createStore(
  EmployeeReducer,
    composeWithDevTools()
    )

export default StoreReducerFile;