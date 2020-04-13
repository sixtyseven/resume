/** @jsx jsx */
import { jsx } from "theme-ui"
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery, Link } from "gatsby"

import HeaderNav from "./HeaderNav"
import "src/assets/scss/index.scss"
import { Location, LocationContext } from "@reach/router"
import { Styled } from "theme-ui"

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
    <Styled.root>
      <Styled.div className="page-wrapper">
        <header className="layout-header">
          <Styled.div className="container">
            <Location>
              {(locationProps: LocationContext) => (
                <HeaderNav
                  siteTitle={data.site.siteMetadata.title}
                  linkedInUrl={data.site.siteMetadata.linkedInUrl}
                  gitRepoUrl={data.site.siteMetadata.gitRepoUrl}
                  location={locationProps.location}
                />
              )}
            </Location>
          </Styled.div>
        </header>

        <main className="container layout-main">{children}</main>
        <div className="push"></div>
      </Styled.div>
      <footer className="container layout-footer">
        <div className="row">
          <div
            className="col-md-4"
            sx={{
              color: `muted`,
            }}
          >
            © {new Date().getFullYear()}
            {` `}
            Bruce Li
            {` `}
          </div>
          <div className="col-md-8">
            <em>
              <Link
                sx={{
                  color: `muted`,
                }}
                to="/contact/report_a_bug"
              >
                Report a bug
              </Link>
            </em>
          </div>
        </div>
      </footer>
    </Styled.root>
  )
}

export default Layout
