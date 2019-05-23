import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

const Box = styled.div`
  margin: 0 auto;
  padding: 3em 1.5em 2em;
  text-align: center;
  max-width: 700px;
  h1 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    color: ${props => props.theme.colors.tertiary};
  }
`

const BG = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('https://media.giphy.com/media/BPfKqCTZhLI6A/giphy.gif');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  opacity: 0.15;
  pointer-events: none;
`

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Box>
      <BG />
      <div className="grid not-found">
        <h1 className="face"><span>(</span> ·<sup>︵</sup>· <span>)</span></h1>
        <h2>Nothing to see here.</h2>
        <p>That page doesn't exist! Check to see if it was a typo, or use the navigation to go to a page that hasn't been swallowed by the vortex.</p>
        <Link to="/">Go back home</Link>
      </div>
    </Box>
  </Layout>
)

export default NotFoundPage
