import axios from 'axios'
import { Alert } from 'bootstrap'
import MechanicProfile from '../pages/MechanicProfile'
export const ADD_MECHANIC = 'ADD_MECHANIC'
export const LOGIN_MECHANIC = 'LOGIN_MECHANIC'
export const GET_REQUEST = 'GET_REQUEST'
export const GET_FEEDBACK = 'GET_FEEDBACK'
export const GET_MECHANIC = 'GET_MECHANIC'
export const UPDATE_MECHANIC='UPDATE_MECHANIC'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const VALIDATE_USER = 'VALIDATE_USER';


const BASE_URL ='http://localhost:8080/api/mechanic/'
const registerAction = (data) => {
    return {
        type: ADD_MECHANIC,
        data
    }
}
export const register = (mechanic) => {
    return (dispatch) => {
        axios.post(BASE_URL+'addMechanic', mechanic)
            .then((response) => {
                alert("Register successfull");
                dispatch(registerAction(response.data))
            })
    }
}


const getRequestAction = (data) => {
    return {
        type: GET_REQUEST,
        data
    }
}
export const getRequest = () => {
    return (dispatch) => {
      let  mechanicId=sessionStorage.getItem("SessMecId");
      alert(mechanicId)
        axios.get(BASE_URL+'viewRequest/'+mechanicId)
            .then((response) => {
                alert(response.data)
                dispatch(getRequestAction(response.data))
                
            })
    }
}
const getFeedbackAction = (data) => {
    return {
        type: GET_FEEDBACK,
        data
    }
}
export const getAllFeedbacks = () => {
    return (dispatch) => {
      let  mechanicId= localStorage.getItem("SessMecId");
      //alert("axios");
        axios.get(BASE_URL+'viewFeedback/'+mechanicId)
            .then((response) => {
                dispatch(getFeedbackAction(response.data))               
            })
    }
}
const getMechanicAction = (data) => {
    return {
        type: GET_MECHANIC,
        data
    }
}
export const getMechanic = () => {
    return (dispatch) => {
        let  mechanicId= sessionStorage.getItem("SessMecId");
        console.log(mechanicId)
        axios.get(BASE_URL+'getMechanic/'+mechanicId)
            .then((response) => {
                console.log(response.data)
                dispatch(getMechanicAction(response.data))
                
            })
    }
}



const updateMechanicAction = (data) => {
    return {
        type: UPDATE_MECHANIC,
        data
    }
}
export const updateMechanic=(mechanic)=> {
    return (dispatch) => {
        axios.put(BASE_URL+'updateMechanic', mechanic)
            .then((response) => {
                alert("Mechanic Updated added")
                dispatch(updateMechanicAction(response.data))
            })
    }
}

const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}





