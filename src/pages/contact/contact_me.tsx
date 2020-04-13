import React from "react"
import Layout from "src/components/layout/Layout"
import SEO from "src/components/common/seo"
import { Styled } from "theme-ui"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Contact me" />
      <div className="row">
        <div className="col-12 col-md-8">
          <h2>
            <Styled.code>Contact Me</Styled.code>
          </h2>
          <br />
          <div>
            <form action="https://formspree.io/moqqobrb" method="POST">
              <div className="form-group">
                <label htmlFor="contact-form-name">
                  <Styled.code>
                    Your Name <span className="text-danger">*</span>
                  </Styled.code>
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-form-name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-form-email">
                  <Styled.code>Your Email Address</Styled.code>
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-form-email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-form-message">
                  <Styled.code>
                    Message <span className="text-danger">*</span>
                  </Styled.code>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  id="contact-form-message"
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
      <div className="row"></div>
    </Layout>
  )
}

export default IndexPage
