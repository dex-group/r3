import React from 'react'
import styled from 'styled-components'

const Company = styled.div`
  text-align: center;
  font-size: 0.5625rem;
  color: #443E4C;
  padding-bottom: 0.5rem;
  a {
    color: #443E4C;
  }
`

const FooterNote = () => (
  <Company>
    A <a href="https://dex.group" target="_blank" rel="noopener noreferrer">DEX Group</a> company.
  </Company>
)

export default FooterNote
