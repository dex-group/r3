import React from 'react'
import Hero from '../components/Hero'
import PageTitle from '../components/PageTitle'

class HeroTitle extends React.Component {
  render() {
    return (
      <Hero>
        <PageTitle>
          A comprehensive digital design agency.
        </PageTitle>
      </Hero>
    )
  }
}

export default HeroTitle