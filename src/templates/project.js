import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'

const ProjectWrapper = styled.div`
  span {
    color: #222;
  }
  p {
    text-transform: none;
  }
  figure {
    margin: 2em 0;
    max-width: 100%;
    img,
    video {
      margin-bottom: 0;
      max-width: 100%;
      width: 100%;
    }
    video {
      max-width: 100%;
    }
    span {
      position: relative;
    }
    figcaption {
      font-size: 0.75em;
    }
  }
`

const ProjectHeader = styled.div`
  position: relative;
  overflow-x: hidden;
  background-color: #111;
  height: 100vh;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
  }
`

const Project = ({ data: { prismicProject } }) => {
  const project = prismicProject

  return (
    <Layout>
      <Helmet title={`${project.data.title.text}`} postPath={project.data.slug} postNode={project.data} description={project.data.description} />
      <ProjectWrapper>
        <ProjectHeader>
          <div
            class="solid-color-bg"
            css={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              zIndex: 0,
              background: `${project.data.color}`
            }}
          ></div>
          <h1>{project.data.title.text}</h1>
          <h2>{project.data.description.text}</h2>
        </ProjectHeader>
        <Wrapper>
          <Img fluid={project.data.cover.localFile.childImageSharp.fluid} />
          <div dangerouslySetInnerHTML={{ __html: project.data.body.html }} />
        </Wrapper>
      </ProjectWrapper>
    </Layout>
  )
}

export default Project

export const projectQuery = graphql`
  query project($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        description {
          text
        }
        date(formatString: "DD.MM.YYYY")
        color
        cover {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body {
          html
        }
      }
    }
  }
`
