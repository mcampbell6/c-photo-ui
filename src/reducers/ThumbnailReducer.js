import {
    GET_THUMBNAILS,
    GET_THUMBNAILS_FULFILLED,
    GET_THUMBNAILS_REJECTED
} from '../constants/ActionTypes'

const initState = {}

export default function pageReducer(state = initState, action) {
    switch (action.type) {
        case GET_THUMBNAILS :
        case GET_THUMBNAILS_REJECTED :
        {
            return state
        }
        case GET_THUMBNAILS_FULFILLED :
        {
            return state = {
                ...state,
                thumbKeys: action.payload
            }
        }
        default :
        {
            return state
        }
    }
}
