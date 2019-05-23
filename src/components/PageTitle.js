import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'

const Title = styled.h1`
  font-size: ${props => (props.small ? '2rem' : '5rem')};
  font-family: 'TiemposHeadline-Bold';
  letter-spacing: 1px;
  text-align: center;
  max-width: 800px;
  padding-bottom: 4rem;
  /* background-image: url('/static/images/clip.jpg');
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; */
`

const PageTitle = props => (
  <Hero>
    <Title small={props.small}>{props.children}</Title>
  </Hero>
)

export default PageTitle
