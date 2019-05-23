import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import HeroTitle from '../components/HeroTitle'
import Headline from '../components/Headline'
import HomeProjects from '../components/HomeProjects'
import Clients from '../components/Clients'
import Services from '../components/Services'
import ContactBottom from '../components/ContactBottom'


const IndexPage = () => (
  <Layout>
    <Wrapper>
      <HeroTitle />
      <Headline />
      <HomeProjects />
      <Clients />
      <Services />
      <ContactBottom />
    </Wrapper>
  </Layout>
)

export default IndexPage
