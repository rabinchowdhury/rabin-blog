import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPosts = ({ data }) => {
  console.log(data);
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <div className="blog-post__wrapper">
        <div className="blog-post__wrapper--one">
          {/* IMAGE */}
        </div>
        <SEO title="Blog posts" />
        <div className="blog-post__wrapper--two">
          <h3>{"Read the latest blog posts here!"}</h3>
        </div>
        <div className="blog-post__wrapper--three">
            {blogPosts.map(({ node: post }) => (
              <div key={post.id}>
                <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
              </div>
            ))}
            <span/>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPosts;

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
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
    }
  }
`;
