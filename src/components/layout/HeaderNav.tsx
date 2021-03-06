import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import LinkedInSVG from "src/assets/images/social_icons/glyphicons-social-18-linked-in.svg"
import GithubSVG from "src/assets/images/social_icons/glyphicons-social-22-github.svg"
import styles from "./HeaderNav.module.scss"
import { WindowLocation } from "@reach/router"
import { useColorMode } from "theme-ui"
import Switch from "src/components/common/Switch"
import sun from "src/assets/images/day_night_theme/sun.png"
import moon from "src/assets/images/day_night_theme/moon.png"

interface IProps {
  siteTitle: string
  linkedInUrl: string
  gitRepoUrl: string
  location: WindowLocation
}

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    className={styles.dayNightThemeIcon}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    className={styles.dayNightThemeIcon}
  />
)

const HeaderNav = ({
  siteTitle,
  linkedInUrl,
  gitRepoUrl,
  location,
}: IProps) => {
  const dropdownActionClass =
    ["/contact/contact_me", "/contact/report_a_bug"].indexOf(
      location.pathname.replace(/\/$/, "")
    ) !== -1
      ? "active"
      : ""

  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
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
            <Nav.Link as={Link} to="/user_guide" activeClassName="active">
              User Guide
            </Nav.Link>
            <NavDropdown
              title="Contact"
              id="basic-nav-dropdown"
              className={`${dropdownActionClass}`}
            >
              <NavDropdown.Item
                as={Link}
                to="/contact/contact_me"
                activeClassName="active"
              >
                Contact Me
              </NavDropdown.Item>
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

          <Switch
            aria-label="Toggle dark mode"
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HeaderNav
