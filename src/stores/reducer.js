import * as actionCreators from '../actions/actions'
import * as actionCreators1 from '../actions/ValidateUser'
import * as actionCreators2 from '../actions/mactions'
import * as actionCreators3 from '../actions/useractions'

const initialState = {
    returnedMessage: 'data yet found',
    userList: [],
    serviceList: [],
    mechanicList: [],
    feedbackList: [],
    status: 0,
    Reqstatus: '',
    resMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionCreators1.VALIDATE_ADMIN:
            let resMessage1 = action.data.message
            let Reqstatus1 = action.status

            console.log(action);
            return {
                returnedMessage: resMessage1,
                status: Reqstatus1
            }

        case actionCreators1.VALIDATE_MECHANIC:
            let resMessage2 = action.data.resMessage
            let Reqstatus2 = action.status
            let listAfterLogin = action.data.mechanicList
            if (listAfterLogin != null) {
                listAfterLogin.map((mechanic) => {

                    sessionStorage.setItem("SessMecId", mechanic.mechanicId);

                })
            }
            console.log(Reqstatus2);
            return {
                returnedMessage: resMessage2,
                status: Reqstatus2,
                mechanicList: listAfterLogin
            }


        case actionCreators1.VALIDATE_USER:
            let resMessage3 = action.data.message
            let Reqstatus3 = action.status
            let listAfterUserLogin = action.data.userList
            console.log(listAfterUserLogin)
            if (listAfterUserLogin != null) {

                listAfterUserLogin.map((user) => {
                    sessionStorage.setItem("SessUserId", user.userId);
                })
            }
            console.log(Reqstatus3);
            return {
                returnedMessage: resMessage3,
                status: Reqstatus3,
                userList: listAfterUserLogin
            }





        case actionCreators.GET_ALL_USERS:
            let listOfUsers = action.data.userList
            console.log(listOfUsers)
            let resMessage
                = action.data.resMessage
            console.log('List of Users')
            console.log(listOfUsers)
            if (listOfUsers.length == 0) {
                resMessage = 'No Data Found'
            }
            return {
                returnedMessage: resMessage,
                userList: listOfUsers
            }

        case actionCreators.DELETE_USER:
            let listOfAfterDeletion = action.data.userList
            let resMsg = action.data.resMessage
            console.log(resMsg)
            console.log(listOfAfterDeletion)
            if (listOfAfterDeletion.length == 0) {
                resMsg = 'After Deletion, No Data Found'
            }
            return {
                returnedMessage: resMsg,
                userList: listOfAfterDeletion

            }
        case actionCreators.GET_ALL_SERVICES:
            let listOfServices = action.data.serviceList
            console.log(listOfServices)
            let serMessage = action.data.resMessage
            console.log(listOfServices)
            if (listOfServices.length == 0) {
                serMessage = 'No Data Found'
            }
            return {
                returnedMessage: serMessage,
                serviceList: listOfServices
            }
        case actionCreators.GET_ALL_MECHANICS:
            let listOfMechanics = action.data.mechanicList
            console.log(listOfMechanics)
            let mecMessage = action.data.resMessage
            console.log(listOfMechanics)
            if (listOfMechanics.length == 0) {
                mecMessage = 'No Data Found'
            }
            return {
                returnedMessage: mecMessage,
                mechanicList: listOfMechanics
            }

        case actionCreators.DELETE_MECHANIC:
            let listOfAfterDeletionMechanic = action.data.mechanicList
            let delMecMsg = action.data.resMessage
            console.log(delMecMsg)
            console.log(listOfAfterDeletionMechanic)
            if (listOfAfterDeletionMechanic.length == 0) {
                delMecMsg = 'After Deletion, No Data Found'
            }
            return {
                returnedMessage: delMecMsg,
                userList: listOfAfterDeletionMechanic

            }
        case actionCreators.GET_ALL_RATINGS:
            let listOfRatings = action.data.mechanicList
            let ratingsMsg = action.data.resMessage
            console.log(ratingsMsg)
            console.log(listOfRatings)
            if (listOfRatings.length == 0) {
                ratingsMsg = 'After Deletion, No Data Found'
            }
            return {
                returnedMessage: ratingsMsg,
                userList: listOfRatings

            }
        case actionCreators.GET_FEEDBACK_BY_ID:
            let listOfFeedbacks = action.data.feedbackList
            console.log(listOfFeedbacks)
            let feedMessage = action.data.resMessage
            console.log(feedMessage)
            if (listOfFeedbacks.length == 0) {
                feedMessage = 'No Data Found'
            }
            return {
                returnedMessage: feedMessage,
                feedbackList: listOfFeedbacks
            }


        case actionCreators2.ADD_MECHANIC:
            let messageAfterAddition = action.data.resMessage
            let listAfterAddition = action.data.mechanicList
            console.log(listAfterAddition);
            console.log(messageAfterAddition)

            return {
                returnedMessage: messageAfterAddition,
                mechanicList: listAfterAddition
            }
        case actionCreators2.GET_REQUEST:
            let messageAfterRequest = action.data.resMessage
            let listAfterRequest = action.data.serviceList
            console.log('Addition of mechanic')
            console.log(listAfterRequest)
            console.log(messageAfterRequest)
            return {
                returnedMessage: messageAfterRequest,
                serviceList: listAfterRequest
            }
        case actionCreators2.GET_FEEDBACK:
            let messageAfterFeedback = action.data.resMessage
            let listAfterFeedback = action.data.feedbackList
            console.log('Addition of mechanic')
            console.log(listAfterFeedback)
            console.log(messageAfterFeedback)
            return {
                returnedMessage: messageAfterFeedback,
                feedbackList: listAfterFeedback
            }
        case actionCreators2.GET_MECHANIC:
            let messageAfterMechanic = action.data.resMessage
            let listAfterMechanic = action.data.mechanicList
            console.log('Addition of mechanic')
            console.log(listAfterMechanic)
            console.log(messageAfterMechanic)
            return {
                returnedMessage: messageAfterMechanic,
                mechanicList: listAfterMechanic
            }
        case actionCreators2.UPDATE_MECHANIC:
            let messageAfterUpdate = action.data.resMessage
            let listAfterUpdate = action.data.mechanicList
            console.log('Addition of mechanic')
            console.log(listAfterUpdate)
            console.log(messageAfterUpdate)
            return {
                returnedMessage: messageAfterUpdate,
                listAfterMechanic: listAfterUpdate
            }
        case actionCreators3.ADD_USER:
            let messageAfterAddition1 = action.data.resMessage
            let listAfterAddition1 = action.data.userList
            console.log('Addition of user')
            console.log(messageAfterAddition1)

            return {
                returnedMessage: messageAfterAddition1,
                userList: listAfterAddition1
            }
        case actionCreators3.GET_MECHANIC:
            let messageAfterGetMechanic = action.data.resMessage
            let listAfterGetMechanic = action.data.mechanicList
            console.log(listAfterGetMechanic)
            console.log(messageAfterGetMechanic)
            return {
                returnedMessage: messageAfterGetMechanic,
                mechanicList: listAfterGetMechanic
            }
        case actionCreators3.GET_USER:
            let messageAfterGetUSER = action.data.resMessage
            let listAfterGetUSER = action.data.userList
            console.log(listAfterGetUSER)
            console.log(messageAfterGetUSER)
            return {
                returnedMessage: messageAfterGetUSER,
                userList: listAfterGetUSER
            }
        case actionCreators3.UPDATE_USER:
            let messageAfterUpdateUser = action.data.resMessage
            let listAfterUpdateUser = action.data.userList
            console.log(listAfterUpdateUser)
            console.log(messageAfterUpdateUser)
            return {
                returnedMessage: messageAfterUpdateUser,
                userList: listAfterUpdateUser
            }
        case actionCreators3.REQUEST_MECHANIC:
            let messageAfterRequestMechanic = action.data.resMessage
            let listService = action.data.serviceList
            console.log(listService)
            console.log(messageAfterRequestMechanic)
            return {
                returnedMessage: messageAfterRequestMechanic,
                serviceList: listService
            }

        case actionCreators3.GIVE_FEEDBACK:
            let messageFeedback = action.data.resMessage
            console.log(messageFeedback)
            return {
                returnedMessage: messageFeedback,
            }




        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                userList: [],
                serviceList: [],
                mechanicList: [],
                feedbackList: []
            }

        default:
            return state
    }
}

export default reducer;