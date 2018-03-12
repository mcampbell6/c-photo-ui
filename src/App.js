import React, { Component } from 'react'
import './App.scss'
import mount from './AppContainer'
import {s3Buckets} from './constants/s3Buckets'
import {Modal} from 'react-bootstrap'
export class App extends Component {
  constructor(props){
    super(props)
    this.renderThumbnails = this.renderThumbnails.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.renderModal = this.renderModal.bind(this)
    this.state = {
      curImage: null,
      showModal: false
    }
  }
  componentDidMount() {
    this.props.getThumbnails()
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-intro">Welcome!</h1>
        <p>This site is built and maintained by Mike Campbell, and is being used as a photo repository for him and his family. If you would like access full to it, please log in or contact him. [UNDER CONSTRUCTION]</p>
        <div className="welcomeImages">
          {this.renderThumbnails()}
          {this.renderModal()}
        </div>
      </div>
    )
  }

  renderThumbnails() {
    if (!!this.props.thumbKeys) {
      return this.props.thumbKeys.map((imgKey, index) => {
        return (
          <img onClick={this.openModal} className="thumbnailImage" key={index}
            src={s3Buckets.thumbnailBucket + imgKey} id={imgKey} alt="downloaded thumbnail"/>
        )
      })
    }
  }

  renderModal() {
        return (
            <Modal animation={false} backdrop={true} bsSize="lg" show={this.state.showModal} onHide={this.closeModal}>
                <img src={s3Buckets.imageBucket + this.state.curImage} width="100%" alt="full version"/>
            </Modal>
        )
    }

    openModal(e) {
      this.setState({
            ...this.state,
            curImage: e.target.id,
            showModal: true
        })
    }

    closeModal() {
        this.setState({
            ...this.state,
            curImage: null,
            showModal: false
        })
    }
}

export default mount(App)
