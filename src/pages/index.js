import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import "./index.css";

import CoverPage from "../components/coverpage"
// import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="wrapper">
      <div className="one">
        <CoverPage />
      </div>
      <div className="two">
        <h1>Hello There</h1>
        <p>Welcome to my awesome blog</p>
      </div>
      <div className="three">
        <Link to="/blogposts/">View all posts</Link>
      </div>
      <div className="four">
        {/* <Footer /> */}
      </div>
    </div>
  </Layout>
);

export default IndexPage;

