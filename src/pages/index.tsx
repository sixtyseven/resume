import React from "react"
import ProfileImage from "src/components/home/ProfileImage"
import Layout from "src/components/layout/Layout"
import SEO from "src/components/common/seo"

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
          <code>Hi there, </code>
        </h2>
        <p>
          <code>Welcome to my profile site.</code>
        </p>
        <p>
          <code>I am a full stack developer.</code>
        </p>
        <p>
          <code>
            Cutting edge technology is cool, but I am also interested in fundamental stuffs, ie: Math, Data Structures,
            Algorithms, OOP, SQL etc.
          </code>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
