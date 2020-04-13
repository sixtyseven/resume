import * as React from "react"
import Layout from "../../components/layout/Layout"
import SEO from "../../components/common/seo"
import { Styled } from "theme-ui"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Report a bug" />
      <div className="row">
        <div className="col-12 col-md-8">
          <h3>
            <Styled.code>Report a bug</Styled.code>
          </h3>
          <h3>
            <Styled.code>Your feedback will be highly valued</Styled.code>
          </h3>
          <br />
          <div>
            <form action="https://formspree.io/moqqobrb" method="POST">
              <div className="form-group">
                <label htmlFor="report-form-title">
                  <Styled.code>
                    Title <span className="text-danger">*</span>
                  </Styled.code>
                </label>
                <input
                  type="text"
                  name="title"
                  id="report-form-title"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="report-form-email">
                  <Styled.code>Your Email Address</Styled.code>
                </label>
                <input
                  type="email"
                  name="email"
                  id="report-form-email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="report-form-descriptions">
                  <Styled.code>
                    Steps to reproduce the bug{" "}
                    <span className="text-danger">*</span>
                  </Styled.code>
                </label>
                <textarea
                  name="descriptions"
                  rows={6}
                  id="report-form-descriptions"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
