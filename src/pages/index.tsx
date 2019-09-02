import React from "react"
import Image from "../components/home/image"
import Layout from "../components/layout/Layout"
import SEO from "../components/common/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row home-page">
      <div className="col-md-4">
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
      <div className="col-md-8">
        <h2>
          <code>Hi people</code>
        </h2>
        <p>
          <code>Welcome to my profile site.</code>
        </p>
        <p>
          <code>I am a full stack developer.</code>
        </p>
        <p>
          <code>
            With many years of working experience with both frontend and backend
            web development, I am particularly interested Modular programming,
            Functional programming, lean programming, scalability, OOP, SQL,
            NOSQL, and Unit testing etc. I have a good eye for detail. I am also
            a a problem solver, a good team player and enjoying collaborating
            with others to produce good quality work.
          </code>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
