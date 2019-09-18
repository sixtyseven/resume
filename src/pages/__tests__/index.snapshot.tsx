import React from "react"
import renderer from "react-test-renderer"
import Index from "src/pages/index"

// @ts-ignore
import MockedImage from "src/components/home/image"
// @ts-ignore
import MockedLayout from "src/components/layout/Layout"
// @ts-ignore
import MockedSEO from "src/components/common/seo"

jest.mock("src/components/home/image", () => {
  return function DummyImage(props: any) {
    return <div data-testid="image"></div>
  }
})

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

describe("Index", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
