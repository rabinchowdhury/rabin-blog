import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost container">
        <img alt={title} src={image.file.url} />
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{body.body}</p>
        <Link to="/blogposts"><b>View More Posts</b></Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`;
