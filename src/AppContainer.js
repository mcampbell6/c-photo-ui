import {connect} from 'react-redux'
import {getThumbnails} from './actions/ThumbnailActions'

const mapStateToProps = (state) => {
    return {
        thumbKeys: state.thumbnails.thumbKeys
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getThumbnails: (pathname) => {
            dispatch(getThumbnails(pathname))
        }
    }
}

export default function mount(page) {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(page)
}
