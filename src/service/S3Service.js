import axios from 'axios'
import {s3Buckets} from '../constants/s3Buckets'

export function getThumbnailsFromS3(pathname) {
  let url = s3Buckets.thumbnailBucket
  if(!!pathname) url = url + pathname
    return axios({
        method: 'get',
        url: url
    })
}

export function parseS3responseXML(response) {
    const responseXML = new DOMParser().parseFromString(response, 'text/xml')
    const children = responseXML.documentElement.childNodes
    const imageKeys = []
    children.forEach((child) => {
        if (child.nodeName === 'Contents') {
            const imgKey = child.getElementsByTagName('Key')[0].textContent
            imageKeys.push(imgKey)
        }
    })
    return imageKeys
}
