import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from "react-modal"
import './modal.css'

Modal.setAppElement(`#___gatsby`)

const ModalClose = styled.button`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -2rem;
  left: 50%;
  margin-left: -1.25rem;
  cursor: pointer;
  opacity: .7;
  transform: translate(0%, 60%);
  transition-delay: .3s;
`

const ModalContent = styled.div`
  width: 100%;
  h2 {
    font-size: 1rem;
    color: inherit;
    margin-bottom: 3rem;
    text-align: center;
    padding: 0 5%;
  }
`

const OpenBtn = styled.button`
  color: #fff;
`

const CloseIcon = ({ fill = 'white' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="80.4,77.6 52.8,50 80.4,22.4 77.6,19.6 50,47.2 22.4,19.6 19.6,22.4 47.2,50 19.6,77.6 22.4,80.4
	50,52.8 77.6,80.4 "fill={fill}/>
  </svg>
)

class Newsletter extends Component {

  constructor(props) {
    super(props)

    this.state = { show: false }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.setState({ show: true })
  }

  close() {
    this.setState({ show: false })
  }

  render() {
    return (
      <div>
        <OpenBtn onClick={this.open}>
          Open
        </OpenBtn>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.close}
          shouldCloseOnOverlayClick={true}
          closeTimeoutMS={400}
          className = "modal"
          overlayClassName = "overlay"
        >
            <ModalClose onClick={this.close}>
              <CloseIcon />
            </ModalClose>
            <ModalContent>
              <h2>Sign up for our weekly newsletter</h2>
            </ModalContent>
        </Modal>
      </div>
    )
  }
}

export default Newsletter