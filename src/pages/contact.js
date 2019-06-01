import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import ContactForm from '../components/ContactForm'
import ContactWithEmail from '../components/ContactWithEmail'
import SEO from '../components/SEO'

const ContactDesc = styled.p`
  max-width: 510px;
  margin: 0 auto 4rem;
  padding-top: 24rem;
  text-align: center;
`

const Contact = () => {
  const postNode = {
    title: `${config.siteTitle} — Contact`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} — Contact`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <Wrapper>
        <ContactDesc>
          For any enquiries, or just wanna say hi, get in touch and contact us.
        </ContactDesc>
        <ContactForm />
        <ContactWithEmail />
      </Wrapper>
    </Layout>
  )
}

export default Contact
