import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import LinkedInSVG from "src/assets/images/glyphicons-social-18-linked-in.svg"
import GithubSVG from "src/assets/images/glyphicons-social-22-github.svg"
import styles from "./HeaderNav.module.scss"

interface IProps {
  siteTitle: string
  linkedInUrl: string
  gitRepoUrl: string
}

const HeaderNav = ({ siteTitle, linkedInUrl, gitRepoUrl }: IProps) => (
  <>
    <Navbar collapseOnSelect variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/skills" activeClassName="active">
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/use_me_guide" activeClassName="active">
            Use me guide
          </Nav.Link>
          <NavDropdown
            as={Link}
            title="Contact"
            id="basic-nav-dropdown"
            to="/contact"
            activeClassName="active"
          >
            <NavDropdown.Item
              as={Link}
              to="/contact/contact_me"
              activeClassName="active"
            >
              Contact Me
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              as={Link}
              to="/contact/report_a_bug"
              activeClassName="active"
            >
              Report a bug
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className={`pr-md-5 ${styles.contactIcons}`}>
          <a href={`${gitRepoUrl}`} target="_blank">
            <GithubSVG />
          </a>

          <a href={`${linkedInUrl}`} target="_blank">
            <LinkedInSVG />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default HeaderNav
