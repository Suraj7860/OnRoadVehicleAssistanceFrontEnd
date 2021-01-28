import axios from 'axios'
export const ADD_USER = 'ADD_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const GET_MECHANIC = 'GET_MECHANIC'
export const GET_USER = 'GET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const REQUEST_MECHANIC = 'REQUEST_MECHANIC'
export const GIVE_FEEDBACK = 'GIVE_FEEDBACK'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

const BASE_URL ='http://localhost:8080/api/user/'


const registerAction = (data) => {
    return {
        type: ADD_USER,
        data
    }
}
export const register = (user) => {
    return (dispatch) => {
       //alert("Register part");
        axios.post(BASE_URL+'userRegister',user)
        .then((response) => {
                alert("Register successfull");
                dispatch(registerAction(response.data));
            })  
    }
}

const loginUserAction = (data) => {
    return {
        type: LOGIN_USER,
       data
    }
}
export const onLoginVerify=(credentials) => {
    return (dispatch) => {
        //alert("inlogin part")
        axios.post(BASE_URL+'userLogin/'+credentials.userEmailId+'/'+credentials.password)
            .then((response) => {
                alert("Login Successfull")
                dispatch(loginUserAction(response.data))
            })
    }
}
const getMecAction = (data) => {
    return {
        type: GET_MECHANIC,
       data
    }
}
export const getAllmechanic=(loc) => {
    return (dispatch) => {
        axios.get(BASE_URL+"searchMechanic/"+loc.location)
            .then((response) => {
                alert("View mechanic on "+loc.location+" location")
                dispatch(getMecAction(response.data))
            })
    }
}
const getUserAction = (data) => {
    return {
        type: GET_USER,
        data
    }
}
export const getUser = () => {
    return (dispatch) => {
        let  userId= sessionStorage.getItem("SessUserId");
        //let  userId= 88;
      //alert("axios");
        axios.get(BASE_URL+'viewUser/'+userId)
            .then((response) => {
                alert("View user Data");
                dispatch(getUserAction(response.data))
                
            })
    }
}
const updateUserAction = (data) => {
    return {
        type: UPDATE_USER,
        data
    }
}
export const updateUser=(user)=> {
    return (dispatch) => {
        axios.put(BASE_URL+'updateUser', user)
            .then((response) => {
                alert("User Updated added")
                dispatch(updateUserAction(response.data))
            })
    }
}
const requestMecAction=(data)=>{
    return {
        type: REQUEST_MECHANIC,
       data
    }
}
export const requestMechanic=(service) => {
    //alert("addRequest"+service.userId);
    return (dispatch) => {
        axios.post(BASE_URL+'addRequest',service)
            .then((response) => {
                alert("Adding Request for service")
                sessionStorage.setItem("SessMecId",service.mechanicId)
                alert("session mec id="+service.mechanicId)
                dispatch(requestMecAction(response.data))
            })
    }
}
const feedbackAction = (data) => {
    return {
        type: GIVE_FEEDBACK,
       data
    }
}
export const givefeedback=(feedback_obj) => {
    alert("giving feedback");
    let mechanicId=sessionStorage.getItem("SessMecId");
    let userId=sessionStorage.getItem("SessUserId");
   // alert(mechanicId+" "+userId);
    return (dispatch) => {
        axios.post(BASE_URL+'giveFeedback/'+mechanicId+'/'+userId,feedback_obj)
            .then((response) => {
                alert("give feedback Successfull")
                dispatch(feedbackAction(response.data))
            })
    }
}

//action to clear state
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





