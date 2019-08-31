import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my profile site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      With many years of working experience with both frontend and backend web
      development, I am particularly interested Modular programming, Functional
      programming, OOP, MVC, SQL and Unit testing. I am also a good team player
      and enjoy collaborating with others to produce good quality work.
    </p>
  </Layout>
);

export default IndexPage;
