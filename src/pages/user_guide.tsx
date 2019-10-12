import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/common/seo"
import UserGuideMd from "../docs/user_guide.mdx"

const UserGuide = () => (
  <Layout>
    <SEO title="User Guide" />
    <section className="section-user-guide">
      <UserGuideMd />
    </section>
  </Layout>
)

export default UserGuide
