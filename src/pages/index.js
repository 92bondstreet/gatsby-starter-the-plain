import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const {author, title} = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout author={author} location={this.props.location} title={title}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section>
          <ul>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <li key={node.fields.slug}>
              <div className="post-date code">
                <span>8 MIN</span>
              </div>
              <div className="title">
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="divider"></div>
    <Bio />

        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
