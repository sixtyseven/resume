import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../../components/layout/Layout"
import SEO from "../../components/common/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMetaDataQueryTwo {
      site {
        siteMetadata {
          linkedInUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="row">
        <div className="col-md-8">
          <h2>
            <code>Reach me via: </code>
          </h2>
          <h4>
            <code>
              LinkedIn:{` `}
              <a href={`${data.site.siteMetadata.linkedInUrl}`} target="_blank">
                {data.site.siteMetadata.linkedInUrl}
              </a>
            </code>
          </h4>
          <h4>
            <code>or Email: lsq991 at gmail dot com</code>
          </h4>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
