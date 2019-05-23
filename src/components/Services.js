import React from 'react'
import styled from 'styled-components'
import SideMeta from './SideMeta'
import SideNotes from './SideNotes'
import { Service1, Service2, Service3 } from '../data/services'

const ServicesGrid = styled.section`
  max-width: 1072px;
  margin: 0 auto;

  .grid {
    padding-bottom: 12rem;
    height: 100%;
  }

  @supports (display: grid) {
    .grid {
      grid-template-columns: 40% 20% 20% 20%;
      grid-auto-rows: 2.5rem;
      display: grid;
    }
    div {
      grid-row: span 6;
      width: auto;
      height: auto;
    }
    @media screen and (max-width: 1040px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media screen and (max-width: 700px) {
      .grid {
        grid-auto-rows: 0.5rem;
        grid-gap: 1.5rem;
      }
      .item {
        height: auto;
      }
    }
  }
`

const ServicesList = styled.div`
  ul {
    padding-left: 4rem;
  }
  li {
    line-height: 2.5rem;
  }
`

const Services = () => (
  <ServicesGrid>
    <div className="grid">
      <SideMeta>
        <h2>All<br />Services</h2>
        <SideNotes>
          Not just a <del>design</del> agency, we do development too, and we're good at it.
        </SideNotes>
      </SideMeta>
      <ServicesList>
        <ul>
          {Service1.map(props => (
            <li key={props.name} className="list-item">
              {props.name}
            </li>
          ))}
        </ul>
      </ServicesList>
      <ServicesList>
        <ul>
          {Service2.map(props => (
            <li key={props.name} className="list-item">
              {props.name}
            </li>
          ))}
        </ul>
      </ServicesList>
      <ServicesList>
        <ul>
          {Service3.map(props => (
            <li key={props.name} className="list-item">
              {props.name}
            </li>
          ))}
        </ul>
      </ServicesList>
    </div>
  </ServicesGrid>
)

export default Services
