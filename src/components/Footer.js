import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  color: hsla(0,0%,100%,.4);
  font-size: 0.875rem;
  opacity: .8;
  border-top: .5px solid rgba(255, 255, 255, .1);
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 1072px;
  padding: 3rem 0 2rem;
  width: 100%;
`

const Copyright = styled.div`
  line-height: 2;
  span {
    margin-left: 0.25rem;
  }
`

const List = styled.ul`
  padding: 0;
`

const Item = styled.li`
  display: inline-block;
  position: relative;
  padding: 0.2rem 0;
  margin-left: 24px;
  a {
    color: hsla(0,0%,100%,.4);
  }
  &:first-child {
    margin-left: 0;
  }
  &:after {
    content: '・';
    position: absolute;
    right: -20px;
    top: 2px;
    opacity: .6;
  }
  &:last-child:after {
    display: none;
  }
`

const Socials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/r3agency'
  }, {
    name: 'Instagram',
    link: 'https://www.instagram.com/r3agency'
  }, {
    name: 'Dribbble',
    link: 'https://dribbble.com/r3agency'
  }, {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/r3agency'
  }
]

const Footer = () => (
  <Wrapper>
    <Copyright>© {new Date().getFullYear()}{" "} R3 Studio Inc.</Copyright>
    <List>
      {Socials.map(props => (
        <Item key={props.name}>
          <a
            href={props.link}
            title={props.name}
            target="_blank"
            rel="noopener noreferrer"
            data-text={props.name}
          >
            {props.name}
          </a>
        </Item>
      ))}
    </List>
  </Wrapper>
)

export default Footer
