import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const ContactBottomWrapper = styled.section`
  display: grid;
  place-items: center;
  height: 50vh;
`

const ContactUs = styled.div`
  text-align: center;
`

const ContactBottomTitle = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-family: TiemposHeadline-Bold;
  line-height: 1.4;
  margin-bottom: 3rem;
`

const ContactBottom = () => (
  <ContactBottomWrapper>
    <ContactUs>
      <ContactBottomTitle>Got a 🦄 project? Let’s chat.</ContactBottomTitle>
      <Button />
    </ContactUs>
  </ContactBottomWrapper>
)

export default ContactBottom
