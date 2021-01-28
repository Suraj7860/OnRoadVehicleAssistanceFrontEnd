import axios from 'axios'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES'
export const GET_ALL_MECHANICS = 'GET_ALL_MECHANICS'
export const GET_ALL_RATINGS = 'GET_ALL_RATINGS'
export const GET_ALL_FEEDBACKS = 'GET_ALL_FEEDBACKS'
export const LOGIN_VERIFICATION ='LOGIN_VERIFICATION'
export const GET_FEEDBACK_BY_ID = 'GET_FEEDBACK_BY_ID'
export const DELETE_USER = 'DELETE_USER'
export const DELETE_MECHANIC = 'DELETE_MECHANIC'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

const BASE_URL = 'http://localhost:8080/admin/'



const getAllUsersAction = (data) => {
    return {
        type: GET_ALL_USERS,
        data
    }
}
export const getAllUsers = () => {
    return (dispatch) => {
        axios.get(BASE_URL+'viewUser')
            .then((response) => {
                dispatch(getAllUsersAction(response.data))
                
            })
    }

}
const deleteUserAction= (data) => {
    return {
        type: DELETE_USER,
        data
    }
}
export const deleteUser = (userId) => {
    console.log(userId)
    return (dispatch) => {
        if(window.confirm("Do you want to delete user with id"+" "+JSON.stringify(userId)+"?"))
        {
            axios.delete(BASE_URL + 'deleteUser/'+userId)
            .then((response) => {
                dispatch(deleteUserAction(response.data))
            }).catch(error=>{
                console.log(error)
            })
        }
        
                
    }
}
const getAllServicesAction = (data) => {
    return {
        type: GET_ALL_SERVICES,
        data
    }
}
export const getAllServices = () => {
    return (dispatch) => {
        axios.get(BASE_URL+'viewRequest')
            .then((response) => {
                dispatch(getAllServicesAction(response.data))
                
            })
    }

}
const getAllMechanicAction = (data) => {
    return {
        type: GET_ALL_MECHANICS,
        data
    }
}
export const getAllMechanics = () => {
    return (dispatch) => {
        axios.get(BASE_URL+'viewMechanic')
            .then((response) => {
                dispatch(getAllMechanicAction(response.data))
                
            })
    }

}

const viewRatingsAction= (data) => {
    return {
        type: GET_ALL_RATINGS,
        data
    }
}
export const getAllRatings = (mechanicId) => {
    console.log(mechanicId)
    return (dispatch) => {
       axios.get(BASE_URL + 'viewRatings/'+mechanicId)
            .then((response) => {
                alert("Average Ratings for the mechanic id"+" " + JSON.stringify(mechanicId)+" "+"is:"+" " +JSON.stringify(response.data))
                dispatch(viewRatingsAction(response.data))
            }).catch(error=>{
                console.log(error)
            })
        
        
                
    }
}
const deleteMechanicAction= (data) => {
    return {
        type: DELETE_MECHANIC,
        data
    }
}
export const deleteMechanic = (mechanicId) => {
    console.log(mechanicId)
    return (dispatch) => {
        if(window.confirm("Do you want to block mechanic with id"+" "+JSON.stringify(mechanicId)+"?"))
        {
            axios.delete(BASE_URL + 'deleteMechanic/'+mechanicId)
            .then((response) => {
                dispatch(deleteMechanicAction(response.data))
            }).catch(error=>{
                console.log(error)
            })
        }
        
                
    }
}

const viewFeedbackById= (data) => {
    return {
        type: GET_FEEDBACK_BY_ID,
        data
    }
}
export const getFeedbackByMechanicId = (mechanicId) => {
    return (dispatch) => {
{
            axios.get(BASE_URL + 'viewFeedback/'+mechanicId)
            .then((response) => {
                
                dispatch(viewFeedbackById(response.data))
                
            }).catch(error=>{
                console.log(error)
            })
        }
        
                
    }
}
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}

