import {actionTypes} from '../src/actiontypes'

const initialState={
    firstName:"initila fnam",
    lastName:"initila lname",
}

const UserDetails =(state=initialState,action)=>{

    switch(action.type){
        case "FIRST_NAME":
            return {
                ...state,firstName: action.payload
            }
        case "LAST_NAME":
            return{
                ...state, lastName:action.payload
            }
        default:
            return initialState;
    }
}

export default UserDetails;