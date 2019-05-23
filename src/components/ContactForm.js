import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DropdownIcon from '-!svg-react-loader?name=DropdownIcon!../images/dropdown.svg'
import 'whatwg-fetch' // Fetch Polyfill

const Form = styled.form`
  max-width: 510px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  text-transform: uppercase;
  /* font-family: 'Suisse Int’l Mono', sans-serif; */
  font-style: normal;
  font-size: 0.625rem;
  div {
    width: 510px;
    position: relative;
    display: inline-block;
    margin-bottom: -1px;
    background-color: rgba(0, 0, 0, 0);
    box-shadow: #808080 0 0 0 1px inset;
  }
  input,
  textarea {
    margin-bottom: 0;
    padding: 0 24px;
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    text-transform: uppercase;
    caret-color: #43E7FD;
    height: 100%;
    line-height: 1.2;
    text-align: left;
    resize: none;
    letter-spacing: 2px;
    background: transparent;
    &:required {
      box-shadow: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const InputWrapper = styled.div`
  height: 60px;
`

const SelectWrapper = styled.div`
  height: 60px;
  &:hover .dropdown-icon {
    fill: rgb(255, 255, 255);
  }
`

const TextareaWrapper = styled.div`
  height: 220px;
`

const Name = styled.input`
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Company = styled.input`
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Message = styled.textarea`
  padding-top: 24px !important;
  position: absolute;
  height: auto;
`

const Budget = styled.input`
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Time = styled.input`
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Range = styled.select`
  appearance: none;
  margin-bottom: 0;
  position: absolute;
  left: 10px;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 10px;
  display: inline-block;
  opacity: 0;
  cursor: pointer;
  border: none;
`

const Icon = styled.span`
  right: 18px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`

const SubmitWrapper = styled.div`
  background: ${props => props.theme.colors.base};
  height: 60px;
  font-weight: 300;
  line-height: 58px;
  color: #fff;
  text-align: center;
  text-indent: 1px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.white} !important;
    color: #000 !important;
  }
`

const Submit = styled.input`
  line-height: 58px !important;
  text-align: center !important;
  font-size: 12px !important;
  cursor: pointer;
  &:hover {
    color: #000 !important;
  }
`

const Modal = styled.div`
  font-family: 'Suisse Int’l Mono', sans-serif;
  background: #191919 !important;
  font-size: 0.875rem;
  padding: 2em;
  position: fixed !important;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Button = styled.button`
  background: #3a3939;
  width: 100%;
  display: inline-block;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  transition: .2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.base};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      company: '',
      message: '',
      budget: '',
      date: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      company: '',
      message: '',
      budget: '',
      date: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        method="post"
        action="https://getform.io/f/c2ae16f8-0efe-4c9d-af61-85a8c9818321"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <InputWrapper>
          <Name
            name="name"
            type="text"
            autocapitalize="on"
            autocorrect="off"
            spellcheck="false"
            placeholder="WHAT'S YOUR NAME?"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Email
            name="email"
            type="email"
            autocapitalize="on"
            autocorrect="off"
            spellcheck="false"
            placeholder="AND YOUR EMAIL?"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Company
            name="company"
            type="text"
            autocapitalize="on"
            autocorrect="off"
            spellcheck="false"
            placeholder="WHICH COMPANY?"
            value={this.state.company}
            onChange={this.handleInputChange}
            required
          />
        </InputWrapper>
        <SelectWrapper>
          <Budget
            name="budget"
            type="text"
            placeholder="BUDGET RANGE?"
            value={this.state.range}
            onChange={this.handleInputChange}
            required
          />
          <Icon>
            <DropdownIcon className='form-dropdown-triangle' />
          </Icon>
          <Range
            name="range"
            value={this.state.range}
            onChange={this.handleInputChange}
          >
            <option value="" disabled=""></option>
            <option value="&lt; $10,000">&lt; $10,000</option>
            <option value="$10,000 - $50,000">$10,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000 +">$100,000 +</option>
          </Range>
        </SelectWrapper>
        <SelectWrapper>
          <Time
            name="time"
            type="text"
            placeholder = "WHICH TIMEFRAME WORKS FOR YOU?"
            value={this.state.date}
            onChange={this.handleInputChange}
            required
          />
          <Icon>
            <DropdownIcon className='form-dropdown-triangle' />
          </Icon>
          <Range
            name="date"
            value={this.state.date}
            onChange={this.handleInputChange}
          >
            <option value="" disabled=""></option>
            <option value="2 Weeks">2 Weeks</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="3 Months +">3 Months +</option>
          </Range>
        </SelectWrapper>
        <TextareaWrapper>
          <Message
            name="message"
            type="text"
            autocapitalize="on"
            autocorrect="off"
            placeholder="TELL US MORE ABOUT YOUR PROJECT DETAILS..."
            value={this.state.message}
            onChange={this.handleInputChange}
            required
          />
        </TextareaWrapper>
        <SubmitWrapper>
          <Submit name="submit" type="submit" value="SEND" />
        </SubmitWrapper>

        <Modal visible={this.state.showModal}>
          <p>Thank you for reaching out. We will get back to you as soon as
            possible.</p>
          <Button onClick={this.closeModal}>OK</Button>
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
