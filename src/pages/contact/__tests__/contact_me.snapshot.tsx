import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import ContactMe from "src/pages/contact/contact_me"

// @ts-ignore
import MockedLayout from "src/components/layout/Layout"
// @ts-ignore
import MockedSEO from "src/components/common/seo"

jest.mock("src/components/layout/Layout", () => {
  return function DummyLayout(props: any) {
    return <div data-testid="layout">{props.children}</div>
  }
})

jest.mock("src/components/common/seo", () => {
  return function DummySEO(props: any) {
    return <div data-testid="seo"></div>
  }
})

beforeEach(() => {
  //@ts-ignore
  useStaticQuery.mockReturnValueOnce({
    site: {
      siteMetadata: {
        linkedInUrl: "linkedInUrl",
      },
    },
  })
})

describe("ContactMe", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ContactMe />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
