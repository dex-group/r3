import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SpeakerList from '../components/SpeakerList'
import SEO from '../components/SEO'

const Speakers = ({ data }) => {
  const postNode = {
    title: `${config.siteTitle} — Speakers`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} — Speakers`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="speakers" customTitle />

      <Container>
        <PageTitle>Speakers</PageTitle>
        <SpeakerList />
      </Container>
    </Layout>
  )
}

export default Speakers
