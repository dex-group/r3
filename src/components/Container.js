import React from 'react'
import styled from 'styled-components'
import { media } from '@styles'

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1072px;
  padding: 5rem 0 2rem;
  position: relative;
  width: 100%;
  ${media.tablet`
    display: block;
  `};

  ${media.phablet`
    max-width: 100%;
    ${props => props.hideOverflow && `overflow: hidden`};
  `};

  ${media.phablet`
    padding: 0 4rem;
  `};
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
