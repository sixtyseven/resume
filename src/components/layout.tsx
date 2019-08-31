/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Header from "./header"
import "./layout.css"

interface IProps {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: IProps) => {
  const data = useStaticQuery(graphql`
    query SssiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://github.com/sixtyseven">Bruce</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
