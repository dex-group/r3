import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Portfolio from '../data/portfolio'
import ScrollOut from 'scroll-out'

const ProjectGrid = styled.section`
  max-width: 1072px;
  margin: 0 auto;

  [data-scroll] {
    will-change: opacity;
    opacity: 1;
    transform: translateY(6rem) scale(0.8);
    transition: all 1.2s cubic-bezier(0.18, 0.84, 0.44, 1);
  }

  [data-scroll="in"] {
    transform: translateY(0) scale(1);
    .home-projects__inner-foreground > img {
      transform: translateX(0) !important;
    }
    .home-projects__inner-foreground2 > img {
      transform: translateY(0) !important;
    }
  }

  [data-scroll="out"] {
    opacity: 0;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 4rem;
  }

  h2 {
    padding-bottom: 4rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
  }

  .home-projects__title {
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
    bottom: 3rem;
    left: 2rem;
    color: #fff;
    position: absolute;
    line-height: 1.1;
    will-change: transform;
    max-width: 18rem;
    margin-bottom: 0;
  }

  .home-projects__inner-background {
    > img,
    > video {
      width: 100%;
      height: auto;
    }
  }

  .home-projects__inner-foreground {
    overflow: hidden;
    > img {
      height: auto;
      position: absolute;
    }
  }

  .project-hold, .project-next {
    .home-projects__inner-foreground > img {
      display: none;
    }
  }

  .project-sg {
    .home-projects__inner-foreground > img {
      width: 80%;
      height: auto;
      position: absolute;
      bottom: -30px;
      right: -40px;
    }
    .home-projects__inner-foreground2 > img {
      width: 25%;
      height: auto;
      position: absolute;
      bottom: -40px;
      left: 8%;
    }
  }

  .project-sspai {
    .home-projects__inner-foreground > img {
      width: 76%;
      height: auto;
      position: absolute;
      top: 14%;
      left: -32px;
      /* transform: translateX(-16%);
      transition: all 1s cubic-bezier(0.63, 1, 0.42, 1); */
    }
    .home-projects__inner-foreground2 > img {
      width: 70%;
      height: auto;
      position: absolute;
      bottom: 0;
      right: -24px;
      /* transform: translateY(-32%);
      transition: all 1s cubic-bezier(0.63, 1, 0.42, 1); */
    }
  }

  .project-workbene {
    .home-projects__inner-foreground > img {
      width: 282px;
      height: auto;
      position: absolute;
      top: -8px;
      left: 5%;
      transition: all 0.5s cubic-bezier(0.63, 1, 0.42, 1);
    }
  }

  .project-freesfund {
    .home-projects__inner-foreground > img {
      width: 264px;
      height: auto;
      position: absolute;
      top: -32px;
      left: 8%;
    }
  }

  .project-pencilnews {
    .home-projects__inner-foreground > img {
      width: 24%;
      height: auto;
      position: absolute;
      opacity: .6;
      top: 8%;
      left: -8%;
    }
  }

  .project-sketchmeetup {
    .home-projects__inner-foreground > img {
      width: 50%;
      height: auto;
      position: absolute;
      opacity: .4;
      bottom: 12%;
      left: -8%;
    }
  }

  .home-projects__inner-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #43E7FD;
      will-change: opacity;
      transition: opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0;
    }
  }

  @supports (display: grid) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1rem;
      grid-gap: 5rem;
      display: grid;
    }
    .item {
      grid-row: span 6;
      width: auto;
      height: auto;
    }
    @media screen and (min-width: 1041px) {
      .item:nth-child(2) {
        grid-column: 2;
        grid-row: 3 / span 6;
      }
    }
    @media screen and (max-width: 1040px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .item {
        grid-row: span 6;
        width: auto;
        min-width: 0;
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

const Card = styled(Link)`
  width: 100%;
  height: 100%;
  display: block;
  color: white;
  position: relative;
  cursor: pointer;
  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, .3);
  transform: scale(1);
  &:hover .home-projects__inner-overlay:after {
    opacity: .6;
  }
  &:hover {
    transform: scale(1.06);
    transition: transform 1.7s cubic-bezier(0.2, 0.57, 0, 1.04) 0.1s;
  }
`

class HomeProjects extends React.Component {
  componentDidMount() {
    ScrollOut({
      threshhold: 0.5,
      once: true,
      cssProps: {
        visibleY: true
      }
    });
  }

  render() {
    return (
      <ProjectGrid>
        <div className="grid">
          {Portfolio.map(props => (
            <Card
              data-scroll
              key={props.name}
              className={`item project-${props.name}`}
              to={`/${props.name}`}
            >
              <div className="home-projects__inner">
                <div className="home-projects__inner-background">
                  <img alt={props.name} src={props.image} />
                </div>
                {props.foreground ?
                  <div className="home-projects__inner-foreground">
                    <img alt={props.name} src={props.foreground} />
                  </div> :
                  null
                }
                {props.foreground2 ?
                  <div className="home-projects__inner-foreground2">
                    <img alt={props.name} src={props.foreground2} />
                  </div> :
                  null
                }
              </div>
            </Card>
          ))}
        </div>
      </ProjectGrid>
    )
  }
}

export default HomeProjects