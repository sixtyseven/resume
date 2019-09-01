/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"

import HeaderNav from "./HeaderNav"
import "src/assets/scss/custom_bootstrap.scss"
import { Location, LocationContext } from "@reach/router"

interface IProps {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: IProps) => {
  const data = useStaticQuery(graphql`
    query SiteMetaDataQuery {
      site {
        siteMetadata {
          title
          linkedInUrl
          gitRepoUrl
        }
      }
    }
  `)

  return (
    <>
      <div className="page-wrapper">
        <header className="layout-header">
          <div className="container ">
            <Location>
              { (locationProps: LocationContext) => (
                <HeaderNav
                  siteTitle={data.site.siteMetadata.title}
                  linkedInUrl={data.site.siteMetadata.linkedInUrl}
                  gitRepoUrl={data.site.siteMetadata.gitRepoUrl}
                  location={locationProps.location}
                />
              )}
            </Location>
          </div>
        </header>

        <main className="container layout-main">{children}</main>
        <div className="push"></div>
      </div>
      <footer className="container layout-footer">
        <div className="row">
          <div className="col-md-4">
            © {new Date().getFullYear()}
            {` `}
            Bruce Li
            {` `}
          </div>
          <div className="col-md-8">
            <em>
              <Link to="/contact/report_a_bug">Report a bug</Link>
            </em>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
