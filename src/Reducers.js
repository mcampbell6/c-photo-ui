import {combineReducers} from 'redux'
import thumbnailReducer from './reducers/ThumbnailReducer'
export default combineReducers({
  thumbnails: thumbnailReducer
})
