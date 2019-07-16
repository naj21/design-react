import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Card from "../components/Card"
import SEO from "../components/seo"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"
import Footer from "../components/Footer";
import { useStaticQuery, graphql } from "gatsby"


const SectionCaption = styled.div`
  text-transform: uppercase;
  color: #94A4BA;
  fonst-size: 12px;
  font-weight: 600;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  padding: 0 100px;
  margin: 50px auto 100px; 

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => {
  const { allContentfulLink } = useStaticQuery(
    graphql`
      query {
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }     
      }
    `
  )
  console.log(allContentfulLink)
  return (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Design. <br/> Develop. <br/> Integrate!!</h1>
        <p>Welcome to your personalized code session. Where you bring your ideas to life.</p>
        <Link to="/page-2/" className="log">Sign Up</Link>
        <div className="Logos">
          <img src={require("../assets/images/logo-sketch.png")} alt="sketch" width="50px" />
          <img src={require("../assets/images/logo-figma.png")} alt="figma" width="50px"  /> 
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png" alt="react" width="50px"  /> 
          <img src="https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-128.png" alt="angular" width="50px"  />
          <img src={require("../assets/images/logo-invision.png")} alt="invision" width="50px"  />
          <img src={require("../assets/images/logo-xcode.png")} alt="xcode" width="50px"  />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>More styles coming</h2>
        <div className="CardGroup">
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
          <Card
            image={require('../assets/images/wallpaper2.jpg')}
            title="Ideal"
            text="Design Inspiration"
          />
        </div>
      </div>
      <Section
        image={require('../assets/images/wallpaper3.jpg')}
        logo={require('../assets/images/logo-react.png')}
        title="React for designers"
        text="Learn how to create custom site with react by building your components in a way that suits your taste."
      />
      <SectionCaption>
        6 Pro Courses
      </SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => {
          return (
            <Cell
              title={cell.title}
              image={cell.image}
            />
          )
        })}
      </SectionCellGroup>
      <Footer links={allContentfulLink.edges}>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:jesax013@gmail.com">Email</a> us to ask anything. © 2018 - Terms of Service - Privacy Policy
      </Footer> 
    </div>
  </Layout>
)}

export default IndexPage

