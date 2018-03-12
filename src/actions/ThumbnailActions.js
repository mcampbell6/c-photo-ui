import {
  GET_THUMBNAILS,
  GET_THUMBNAILS_FULFILLED,
  GET_THUMBNAILS_REJECTED
} from '../constants/ActionTypes'

import {getThumbnailsFromS3, parseS3responseXML} from '../service/S3Service'

export function getThumbnails(pathname) {
  return (dispatch) => {
    dispatch({
      type: GET_THUMBNAILS,
      payload: pathname
    })

    return getThumbnailsFromS3(pathname).then((res) => {
      dispatch({
        type: GET_THUMBNAILS_FULFILLED,
        payload: parseS3responseXML(res.data)

      })
    }).catch((err) => {
      dispatch({
        type: GET_THUMBNAILS_REJECTED,
        payload: err
      })
    })
  }
}
