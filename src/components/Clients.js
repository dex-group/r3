import React from 'react'
import styled from 'styled-components'
import SideMeta from './SideMeta'
import SideNotes from './SideNotes'
import { Client1, Client2, Client3 } from '../data/clients'

const ClientsGrid = styled.section`
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
      grid-row: span 12;
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

const ClientsList = styled.div`
  ul {
    padding-left: 4rem;
  }
  li {
    line-height: 2.5rem;
    position: relative;
    &:hover sup {
      opacity: 1;
    }
  }
  sup {
    position: relative;
    line-height: 0;
    font-size: 0.5rem;
    top: -12px;
    right: -8px;
    color: ${props => props.theme.colors.secondary};
    opacity: 0;
    transition: opacity 0.2s;
  }
`

const Clients = () => (
  <ClientsGrid>
    <div className="grid">
      <SideMeta>
        <h2>Clients &<br />Partners</h2>
        <SideNotes>
          Big or small, online or offline, mobile or web, blockchains or classic internet, local or international. We work on diverse projects for top brands and cool startups.
        </SideNotes>
      </SideMeta>
      <ClientsList>
        <ul>
          {Client1.map(link => (
            <li key={link.link} className="list-item">
              <a
                href={link.link}
                title={link.name_en}
                target="_blank"
                rel="noopener noreferrer"
                data-text={link.name_en}
              >
                {link.name_en}
                <sup>{link.name_cn}</sup>
              </a>
            </li>
          ))}
        </ul>
      </ClientsList>
      <ClientsList>
        <ul>
          {Client2.map(link => (
            <li key={link.link} className="list-item">
              <a
                href={link.link}
                title={link.name_en}
                target="_blank"
                rel="noopener noreferrer"
                data-text={link.name_en}
              >
                {link.name_en}
                <sup>{link.name_cn}</sup>
              </a>
            </li>
          ))}
        </ul>
      </ClientsList>
      <ClientsList>
        <ul>
          {Client3.map(link => (
            <li key={link.link} className="list-item">
              <a
                href={link.link}
                title={link.name_en}
                target="_blank"
                rel="noopener noreferrer"
                data-text={link.name_en}
              >
                {link.name_en}
                <sup>{link.name_cn}</sup>
              </a>
            </li>
          ))}
        </ul>
      </ClientsList>
    </div>
  </ClientsGrid>
)

export default Clients
