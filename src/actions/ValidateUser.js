import axios from "axios";
 const ADMIN_BASE_URL = 'http://localhost:8080/admin';
 const MECHANIC_BASE_URL='http://localhost:8080/api/mechanic'
 const USER_BASE_URL='http://localhost:8080/api/user'

export const VALIDATE_ADMIN = 'VALIDATE_ADMIN';
export const VALIDATE_MECHANIC = 'VALIDATE_MECHANIC';
export const VALIDATE_USER = 'VALIDATE_USER';

const validateAdminAction = (data,status) => {
    return {
        type: VALIDATE_ADMIN,
        data,
        status
    }
}

const validateMechanicAction = (data,status) => {
    return {
        type: VALIDATE_MECHANIC,
        data,
        status
    }
}

const validateUserAction = (data,status) => {
    return {
        type: VALIDATE_USER,    
        data,
        status
    }
}
export const validateUser = (User) => {
    return (dispatch) => {
        console.log("USer:"+JSON.stringify(User))


        if(User.userRole === 'admin')
        {
            axios.post(ADMIN_BASE_URL+`/login?email=${User.email}&password=${User.password}`)
            .then((response) => {
                dispatch(validateAdminAction(response.data,response.status))
                console.log(response)
                
            })
            .catch((err) => {
                dispatch(validateAdminAction(err,404))

                setTimeout(() => {
                    dispatch(validateAdminAction(err,0))
                        
                }, 1500);
            })
        } 
        else if(User.userRole === 'mechanic')
        {
            axios.post(MECHANIC_BASE_URL+`/mechanicLogin?email=${User.email}&password=${User.password}`)
            .then((response) => {
                console.log(response)
                dispatch(validateMechanicAction(response.data,response.status))

                
            }).catch((err) => {
                dispatch(validateMechanicAction(err,404))

                setTimeout(() => {
                    dispatch(validateMechanicAction(err,0))
                        
                }, 1500);
            })
        } 
        
        else if(User.userRole ==='user')
        {
            axios.post(USER_BASE_URL+`/userLogin?email=${User.email}&password=${User.password}`)
            .then((response) => {
                dispatch(validateUserAction(response.data,response.status))
                console.log(response)
            }).catch((err) => {
                dispatch(validateUserAction(err,404))

                setTimeout(() => {
                    dispatch(validateUserAction(err,0))
                        
                }, 1500);
            })
        }  
        
        
    }
}
