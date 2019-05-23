import React from 'react'
import styled from 'styled-components'
import CopyToClipboard from './CopyToClipboard'

const ContactWithEmailText = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  padding: 3rem 0;

  button {
    text-decoration: underline;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
`

const ContactWithEmail = () => {
  return (
    <ContactWithEmailText>
      <CopyToClipboard
        copyOnClick = "hello@r3.agency"
        iconFill = "rgba(255, 255, 255, 0.6)"
      >
        Fancy email?{' '}
        <button>hi@r3.agency</button>
      </CopyToClipboard>
    </ContactWithEmailText>
  )
}

export default ContactWithEmail