import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const Gradient = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 300%;
  height: 100%;
  bottom: auto;
  margin: auto;
  z-index: -1;
  background-image: linear-gradient(190deg, rgba(73, 0, 165, 1) 0%, rgba(9, 9, 121, 1) 23%, rgba(0, 212, 255, 1) 49%, rgba(67, 231, 253, 1) 73%);
  transition: all 0s ease-out 0s;
  transform: translateX(-35%);
`

const ClientButton = styled(Link)`
  color: #43E7FD !important;
  background: #232323;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, .03);
  font-size: 0.625rem;
  padding: 12px 24px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all .2s ease-out 0s;
  overflow: hidden;
  display: inline-block;
  position: relative;
  transform: translatez(0);
  :hover {
    color: #004952 !important;
    background: ${props => props.theme.colors.highlight};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, .3);
    transition: all 0.3s ease-out 0.1s;
  }
  :hover ${Gradient} {
    transform: translateX(101%);
    transition: all 0.6s ease-out 0s;
  }
`

const Button = () => {
  return (
    <ClientButton to="/contact/">
      <Gradient />
      IF YOU LIKE IT, PUT A &nbsp;
      <span role="img" aria-label="Engagement Ring">💍</span>
      &nbsp; ON IT.
    </ClientButton>
  )
}

export default Button