import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/common/seo"
import UserGuideMd from "../components/md/user_guide.mdx"

const UserGuide = () => (
  <Layout>
    <SEO title="User Guide" />
    <UserGuideMd />
  </Layout>
)

export default UserGuide
