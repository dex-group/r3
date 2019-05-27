import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import Container from '../components/Container'

const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  a {
    font-weight: 600;
  }
  .nav__active {
    &:before {
      transition: all .3s ease-in-out;
      position: absolute;
      top: 50% !important;
      transform: rotate(-6deg);
      margin-top: -2px;
      background: rgba(67, 231, 253, .8);
      height: 6px;
      width: 100%;
      content: '';
      visibility: visible !important;
      opacity: 1 !important;
    }
    &:before {
      width: 100%;
    }
    &:after {
        visibility: hidden !important;
      }
    &:hover {
      color: #fff;
      &:after,
      &:before {
        animation: none !important;
      }
    }
  }
`

const Box = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  &:first-child {
    justify-content: flex-start;
  }
`

const Nav = styled.nav`
  margin-left: auto;

  ul {
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 3rem;
  }
`

const Menu = () => {
  return (
    <Headroom disableInlineStyles upTolerance={40}>
      <Container>
        <Header>
          <Box>
            <Link
              to="/studio"
              activeClassName="nav__active"
              data-text="Our Studio"
            >
              Our Studio
            </Link>
          </Box>
          <Box>
            <Link to="/">R3</Link>
          </Box>
          <Box>
            <Nav>
              <ul>
                <li>
                  <Link
                    to="/works"
                    activeClassName="nav__active"
                    data-text="Works"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/articles"
                    activeClassName="nav__active"
                    data-text="Articles"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    activeClassName="nav__active"
                    data-text="Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Nav>
          </Box>
        </Header>
      </Container>
    </Headroom>
  )
}

export default Menu
