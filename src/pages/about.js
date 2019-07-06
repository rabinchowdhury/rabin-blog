import React, { Component } from "react";
import Layout from "../components/layout";

// Promise based HTTP client for the browser and node.js

class About extends Component {

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="profile">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus harum vel accusamus aliquid assumenda incidunt, accusantium porro mollitia nostrum repellendus ut doloribus! Autem quae necessitatibus aut pariatur obcaecati accusamus ad!</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;