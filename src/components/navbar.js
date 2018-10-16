import React from 'react'
import Link from 'gatsby-link'

export default class Header extends React.Component {
  render() {
    const {logo, siteTitle} = this.props
    return (
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <Link className="py-2" to="/">
            <img src={logo}/>
          </Link>
          <Link className="py-2 d-none d-md-inline-block" to="page-2">
            Page 2
          </Link>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Product
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Contact
          </a>
        </div>
      </nav>
    )
  }
}
