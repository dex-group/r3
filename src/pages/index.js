import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import HeroTitle from '../sections/Home.HeroTitle'
import Headline from '../sections/Home.Headline'
import HomeProjects from '../sections/Home.Projects'
import Clients from '../sections/Home.Clients'
import Services from '../sections/Home.Services'
import ContactBottom from '../sections/Home.ContactBottom'


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
