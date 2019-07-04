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
          <h4>{"Latest Blog Posts!"}</h4>
        </div>
        <div className="blog-post__wrapper--three">
            <div className=""></div>
            {blogPosts.map(({ node: post }) => (
              <div key={post.id}>
                {/* <button className="blog-post__list"><Link to={`/blogpost/${post.slug}`}>{post.title}</Link></button> */}
                <div className="blog-post__list"><a href={`/blogpost/${post.slug}`}>{post.title}</a></div>
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
