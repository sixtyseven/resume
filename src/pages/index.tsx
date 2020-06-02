import React from "react"
import ProfileImage from "src/components/home/ProfileImage"
import Layout from "src/components/layout/Layout"
import SEO from "src/components/common/seo"
import { Styled } from "theme-ui"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row home-page">
      <div className="col-md-4">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <ProfileImage />
        </div>
      </div>
      <div className="col-md-8">
        <h2>
          <Styled.code>Hi there, </Styled.code>
        </h2>
        <p>
          <Styled.code>Welcome to my profile site.</Styled.code>
        </p>
        <p>
          <Styled.code>I am a full stack developer.</Styled.code>
        </p>
        <p>
          <Styled.code>
            Cutting edge technology is cool, but I am also interested in
            fundamental stuff, ie: Math, Data Structures, Algorithms, OOP, SQL
            etc.
          </Styled.code>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
