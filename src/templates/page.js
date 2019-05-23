import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Pages = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  color: #969696;
  padding-top: 6rem;
  padding-bottom: 6rem;
  h2,h3,h4,h5,h6,p,blockquote {
    margin: 3.5rem auto;
    max-width: 800px;
  }
  a {
    color: rgba(255, 255, 255, .8);
    :hover {
      color: #43E7FD;
    }
  }
  .gatsby-image-wrapper {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
  blockquote {
    font-size: 0.875rem;
    color: #505050;
    /* background-color: #191919; */
    border: 3px solid #191919;
    padding: 2rem;
    p {
      margin: 0;
    }
  }
`

export default ({ children, pageContext, data, location }) => {
  const postImage =
    data &&
    data.file &&
    data.file.childImageSharp &&
    data.file.childImageSharp.resize &&
    data.file.childImageSharp.resize.src
      ? data.file.childImageSharp.resize.src
      : null;

  const seo = {
    frontmatter: {
      // By default, get the slug from the page location.
      slug: location.pathname.replace(/[^\w\d-]/g, ''),
      ...pageContext.frontmatter,
    },
    postImage,
  };

  return (
    <Layout title={pageContext.frontmatter.title}>
      <SEO {...seo} />
      <PageTitle>{pageContext.frontmatter.title}</PageTitle>
      <Wrapper>
        <Pages>{children}</Pages>
      </Wrapper>
    </Layout>
  );
};
