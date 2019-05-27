import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SubTitle from '../components/SubTitle'

const Info = styled.section`
  margin: 16rem auto;
`

const Intro = styled.p`
  line-height: 1.6;
  font-size: 2rem;
  color: rgba(255, 255, 255, .8);
`

const Headline = () => (
  <Info className='mw8'>
    <SubTitle>Who we are</SubTitle>
    <Intro>
      We are a tiny creative <Link data-text="studio" to="/studio">studio</Link> with offices in Beijing, Shenzhen and Tianjin. We help startups and established companies design <Link data-text="top-notch" to="/works">top-notch</Link> products and grow their businesses. We specialize in UI/UX, web design, mobile apps, branding, web development and anything digital stuff.
    </Intro>
  </Info>
)

export default Headline