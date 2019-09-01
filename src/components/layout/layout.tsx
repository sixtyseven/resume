/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import HeaderNav from "./HeaderNav"
import "../../assets/scss/custom_bootstrap.scss"
import "./layout.scss"

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
        }
      }
    }
  `)

  return (
    <>
      <div className="page-wrapper">
        <header className="layout-header">
          <div className="container ">
            <HeaderNav
              siteTitle={data.site.siteMetadata.title}
              linkedInUrl={data.site.siteMetadata.linkedInUrl}
            />
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
            <a href="https://github.com/sixtyseven">Bruce Li</a>
            {` `}
          </div>
          <div className="col-md-8">
            <em>
              <a href="/todo">Report a bug</a>
            </em>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
