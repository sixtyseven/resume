import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/common/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="row">
        <div className="col-md-8">
          <h2>
            <code>Report a bug </code>
          </h2>
          <div>form todo</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
