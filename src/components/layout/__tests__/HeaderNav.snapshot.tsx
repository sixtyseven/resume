import React from "react"
import renderer from "react-test-renderer"
import HeaderNav from "src/components/layout/HeaderNav"
import { WindowLocation } from "@reach/router"

describe("HeaderNav", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <HeaderNav
          siteTitle="Default Starter"
          linkedInUrl="linkedInUrl"
          gitRepoUrl="gitRepoUrl"
          location={{ pathname: "/contact/contact_me" } as WindowLocation}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
