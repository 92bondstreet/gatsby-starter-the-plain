import React from 'react'
import { Link } from 'gatsby'

import './Layout.scss'
import './syntax.scss'


class Layout extends React.Component {
  render() {
    const { author, location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
                }}
      >
        {header}
        {children}
        <div className="footer">
          <span className="block">&copy; {new Date().getFullYear()} {author}</span>
          <span className="block"><small>&lt;/&gt; Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://github.com/heiswayi/the-plain">The Plain theme</a>.</small></span>
        </div>
      </div>
    )
  }
}

export default Layout
