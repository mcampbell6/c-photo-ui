import React, { Component } from 'react'
import './App.scss'
import mount from './AppContainer'
import {s3Buckets} from './constants/s3Buckets'
import {Row} from 'react'
export class App extends Component {
  constructor(props){
    super(props)
    this.renderThumbnails = this.renderThumbnails.bind(this)
  }
  componentDidMount() {
    this.props.getThumbnails()
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-intro">Welcome!</h1>
        <p>This site is built and maintained by Mike Campbell, and is being used as a photo repository for him and his family. If you would like access full to it, please log in or contact him.</p>
        <div className="welcomeImages">
          {this.renderThumbnails()}
        </div>
      </div>
    )
  }

  renderThumbnails() {
    if (!!this.props.thumbKeys) {
      return this.props.thumbKeys.map((imgKey, index) => {
        return (
          <img className="thumbnailImage" key={index}
            src={s3Buckets.thumbnailBucket + imgKey} id={imgKey} alt="downloaded thumbnail"/>
        )
      })
    }
  }
}

export default mount(App)
