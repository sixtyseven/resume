import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/common/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className="col-md-8">
        <h2>
          <code>Contact me via: </code>
        </h2>
        <h4>
          <code>
            <a href="https://www.linkedin.com/in/shouqiangli/" target="_blank">
              LinkedIn
            </a>
          </code>
        </h4>
        <h4>
          <code>or Email: lsq991 at gmail dot come</code>
        </h4>
      </div>
    </div>
  </Layout>
)

export default IndexPage
