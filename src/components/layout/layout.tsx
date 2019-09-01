/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Header from "./header_nav"
import "../../assets/scss/custom_bootstrap.scss"
import "./layout.scss"

import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap"

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
      <div className="layout-header">
        <div className="container ">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
      </div>

      <main className="container layout-main">{children}</main>

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
