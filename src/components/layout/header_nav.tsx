import React from "react"
import { Link } from "gatsby"
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap"

interface IProps {
  siteTitle: string
}

const Header = ({ siteTitle }: IProps) => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        {siteTitle}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/page-2">
          page 2
        </Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </>
)

export default Header
